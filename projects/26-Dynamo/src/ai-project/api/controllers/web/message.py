# -*- coding:utf-8 -*-
import json
import logging
from typing import Generator, Union

from flask import stream_with_context, Response
from flask_restful import reqparse, fields, marshal_with
from flask_restful.inputs import int_range
from werkzeug.exceptions import NotFound, InternalServerError
from models.model import MessageFeedback
from extensions.ext_kafka import AIBotActivityType, publish_chat_activity_message

import services
from controllers.web import api
from controllers.web.error import NotChatAppError, CompletionRequestError, ProviderNotInitializeError, \
    AppMoreLikeThisDisabledError, NotCompletionAppError, AppSuggestedQuestionsAfterAnswerDisabledError, \
    ProviderQuotaExceededError, ProviderModelCurrentlyNotSupportError
from controllers.web.wraps import WebApiResource
from core.llm.error import LLMRateLimitError, LLMBadRequestError, LLMAuthorizationError, LLMAPIConnectionError, \
    ProviderTokenNotInitError, LLMAPIUnavailableError, QuotaExceededError, ModelCurrentlyNotSupportError
from libs.helper import uuid_value, TimestampField
from services.completion_service import CompletionService
from services.errors.app import MoreLikeThisDisabledError
from services.errors.conversation import ConversationNotExistsError
from services.errors.message import MessageNotExistsError, SuggestedQuestionsAfterAnswerDisabledError
from services.message_service import MessageService


class MessageListApi(WebApiResource):
    feedback_fields = {
        'rating': fields.String
    }

    message_fields = {
        'id': fields.String,
        'conversation_id': fields.String,
        'inputs': fields.Raw,
        'query': fields.String,
        'answer': fields.String,
        'feedback': fields.Nested(feedback_fields, attribute='user_feedback', allow_null=True),
        'created_at': TimestampField
    }

    message_infinite_scroll_pagination_fields = {
        'limit': fields.Integer,
        'has_more': fields.Boolean,
        'data': fields.List(fields.Nested(message_fields))
    }

    @marshal_with(message_infinite_scroll_pagination_fields)
    def get(self, app_model, end_user):
        if app_model.mode != 'chat':
            raise NotChatAppError()

        parser = reqparse.RequestParser()
        parser.add_argument('conversation_id', required=True,
                            type=uuid_value, location='args')
        parser.add_argument('first_id', type=uuid_value, location='args')
        parser.add_argument('limit', type=int_range(
            1, 100), required=False, default=20, location='args')
        args = parser.parse_args()

        try:
            return MessageService.pagination_by_first_id(app_model, end_user,
                                                         args['conversation_id'], args['first_id'], args['limit'])
        except services.errors.conversation.ConversationNotExistsError:
            raise NotFound("Conversation Not Exists.")
        except services.errors.message.FirstMessageNotExistsError:
            raise NotFound("First Message Not Exists.")


class MessageFeedbackApi(WebApiResource):
    def post(self, app_model, end_user, message_id):
        message_id = str(message_id)

        parser = reqparse.RequestParser()
        parser.add_argument('rating', type=str, choices=[
                            'like', 'dislike', None], location='json')
        args = parser.parse_args()

        try:
            feedback: MessageFeedback = MessageService.create_feedback(
                app_model, message_id, end_user, args['rating'])

            activity_type: AIBotActivityType = AIBotActivityType.likeAnswer
            if feedback.rating == 'like':
                activity_type: AIBotActivityType = AIBotActivityType.likeAnswer
            if feedback.rating == 'dislike':
                activity_type: AIBotActivityType = AIBotActivityType.dislikeAnswer

            publish_chat_activity_message(
                activity_type,
                end_user.external_user_id,
                feedback.app_id,
                feedback.conversation_id,
                feedback.message_id)

        except services.errors.message.MessageNotExistsError:
            raise NotFound("Message Not Exists.")

        return {'result': 'success'}


class MessageMoreLikeThisApi(WebApiResource):
    def get(self, app_model, end_user, message_id):
        if app_model.mode != 'completion':
            raise NotCompletionAppError()

        message_id = str(message_id)

        parser = reqparse.RequestParser()
        parser.add_argument('response_mode', type=str, required=True, choices=[
                            'blocking', 'streaming'], location='args')
        args = parser.parse_args()

        streaming = args['response_mode'] == 'streaming'

        publish_chat_activity_message(
            AIBotActivityType.completion,
            end_user.external_user_id,
            app_model.id,
            message_id=message_id)

        try:
            response = CompletionService.generate_more_like_this(
                app_model, end_user, message_id, streaming)
            return compact_response(response)
        except MessageNotExistsError:
            raise NotFound("Message Not Exists.")
        except MoreLikeThisDisabledError:
            raise AppMoreLikeThisDisabledError()
        except ProviderTokenNotInitError:
            raise ProviderNotInitializeError()
        except QuotaExceededError:
            raise ProviderQuotaExceededError()
        except ModelCurrentlyNotSupportError:
            raise ProviderModelCurrentlyNotSupportError()
        except (LLMBadRequestError, LLMAPIConnectionError, LLMAPIUnavailableError,
                LLMRateLimitError, LLMAuthorizationError) as e:
            raise CompletionRequestError(str(e))
        except ValueError as e:
            raise e
        except Exception:
            logging.exception("internal server error.")
            raise InternalServerError()


def compact_response(response: Union[dict | Generator]) -> Response:
    if isinstance(response, dict):
        return Response(response=json.dumps(response), status=200, mimetype='application/json')
    else:
        def generate() -> Generator:
            try:
                for chunk in response:
                    yield chunk
            except MessageNotExistsError:
                yield "data: " + json.dumps(api.handle_error(NotFound("Message Not Exists.")).get_json()) + "\n\n"
            except MoreLikeThisDisabledError:
                yield "data: " + json.dumps(api.handle_error(AppMoreLikeThisDisabledError()).get_json()) + "\n\n"
            except ProviderTokenNotInitError:
                yield "data: " + json.dumps(api.handle_error(ProviderNotInitializeError()).get_json()) + "\n\n"
            except QuotaExceededError:
                yield "data: " + json.dumps(api.handle_error(ProviderQuotaExceededError()).get_json()) + "\n\n"
            except ModelCurrentlyNotSupportError:
                yield "data: " + json.dumps(api.handle_error(ProviderModelCurrentlyNotSupportError()).get_json()) + "\n\n"
            except (LLMBadRequestError, LLMAPIConnectionError, LLMAPIUnavailableError,
                    LLMRateLimitError, LLMAuthorizationError) as e:
                yield "data: " + json.dumps(api.handle_error(CompletionRequestError(str(e))).get_json()) + "\n\n"
            except ValueError as e:
                yield "data: " + json.dumps(api.handle_error(e).get_json()) + "\n\n"
            except Exception:
                logging.exception("internal server error.")
                yield "data: " + json.dumps(api.handle_error(InternalServerError()).get_json()) + "\n\n"

        return Response(stream_with_context(generate()), status=200,
                        mimetype='text/event-stream')


class MessageSuggestedQuestionApi(WebApiResource):
    def get(self, app_model, end_user, message_id):
        if app_model.mode != 'chat':
            raise NotCompletionAppError()

        message_id = str(message_id)

        try:
            questions = MessageService.get_suggested_questions_after_answer(
                app_model=app_model,
                user=end_user,
                message_id=message_id
            )
        except MessageNotExistsError:
            raise NotFound("Message not found")
        except ConversationNotExistsError:
            raise NotFound("Conversation not found")
        except SuggestedQuestionsAfterAnswerDisabledError:
            raise AppSuggestedQuestionsAfterAnswerDisabledError()
        except ProviderTokenNotInitError:
            raise ProviderNotInitializeError()
        except QuotaExceededError:
            raise ProviderQuotaExceededError()
        except ModelCurrentlyNotSupportError:
            raise ProviderModelCurrentlyNotSupportError()
        except (LLMBadRequestError, LLMAPIConnectionError, LLMAPIUnavailableError,
                LLMRateLimitError, LLMAuthorizationError) as e:
            raise CompletionRequestError(str(e))
        except Exception:
            logging.exception("internal server error.")
            raise InternalServerError()

        return {'data': questions}


api.add_resource(MessageListApi, '/messages')
api.add_resource(MessageFeedbackApi, '/messages/<uuid:message_id>/feedbacks')
api.add_resource(MessageMoreLikeThisApi,
                 '/messages/<uuid:message_id>/more-like-this')
api.add_resource(MessageSuggestedQuestionApi,
                 '/messages/<uuid:message_id>/suggested-questions')
