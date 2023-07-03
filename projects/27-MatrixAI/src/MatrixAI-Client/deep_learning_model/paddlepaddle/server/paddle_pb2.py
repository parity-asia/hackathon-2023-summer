# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: paddle.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='paddle.proto',
  package='paddle',
  syntax='proto3',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x0cpaddle.proto\x12\x06paddle\"\x07\n\x05\x45mpty\"_\n\x0bTrainResult\x12\x0f\n\x07message\x18\x01 \x01(\t\x12\x12\n\ntrue_label\x18\x02 \x01(\x05\x12\x17\n\x0fpredicted_label\x18\x03 \x01(\x05\x12\x12\n\nimage_data\x18\x04 \x01(\x0c\x32\x45\n\x0cTrainService\x12\x35\n\x0fTrainAndPredict\x12\r.paddle.Empty\x1a\x13.paddle.TrainResultb\x06proto3'
)




_EMPTY = _descriptor.Descriptor(
  name='Empty',
  full_name='paddle.Empty',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=24,
  serialized_end=31,
)


_TRAINRESULT = _descriptor.Descriptor(
  name='TrainResult',
  full_name='paddle.TrainResult',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='message', full_name='paddle.TrainResult.message', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='true_label', full_name='paddle.TrainResult.true_label', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='predicted_label', full_name='paddle.TrainResult.predicted_label', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='image_data', full_name='paddle.TrainResult.image_data', index=3,
      number=4, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=33,
  serialized_end=128,
)

DESCRIPTOR.message_types_by_name['Empty'] = _EMPTY
DESCRIPTOR.message_types_by_name['TrainResult'] = _TRAINRESULT
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Empty = _reflection.GeneratedProtocolMessageType('Empty', (_message.Message,), {
  'DESCRIPTOR' : _EMPTY,
  '__module__' : 'paddle_pb2'
  # @@protoc_insertion_point(class_scope:paddle.Empty)
  })
_sym_db.RegisterMessage(Empty)

TrainResult = _reflection.GeneratedProtocolMessageType('TrainResult', (_message.Message,), {
  'DESCRIPTOR' : _TRAINRESULT,
  '__module__' : 'paddle_pb2'
  # @@protoc_insertion_point(class_scope:paddle.TrainResult)
  })
_sym_db.RegisterMessage(TrainResult)



_TRAINSERVICE = _descriptor.ServiceDescriptor(
  name='TrainService',
  full_name='paddle.TrainService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=130,
  serialized_end=199,
  methods=[
  _descriptor.MethodDescriptor(
    name='TrainAndPredict',
    full_name='paddle.TrainService.TrainAndPredict',
    index=0,
    containing_service=None,
    input_type=_EMPTY,
    output_type=_TRAINRESULT,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_TRAINSERVICE)

DESCRIPTOR.services_by_name['TrainService'] = _TRAINSERVICE

# @@protoc_insertion_point(module_scope)
