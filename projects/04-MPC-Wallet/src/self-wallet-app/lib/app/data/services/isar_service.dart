import 'package:isar/isar.dart';
import 'package:path_provider/path_provider.dart';
import 'package:sunrise/app/data/models/account_colletction.dart';
import 'package:sunrise/app/data/models/chat_collection.dart';

class IsarService {
  static Isar? isar;

  static Future<void> init() async {
    final dir = await getApplicationDocumentsDirectory();
    final _isar = await Isar.open(
      [
        BalanceSchema,
        MainnetSchema,
        ContractSchema,
        ProxyAccountSchema,
        ChatConversationSchema,
        ChatMessageSchema
      ],
      directory: dir.path,
    );
    isar = _isar;
  }
}
