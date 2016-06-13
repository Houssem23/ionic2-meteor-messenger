import {Model} from './model';
import {MessagesCollection} from '../collections/messages-collection';


export class ChatModel extends Model {
  constructor({ memberIds }) {
    super();
    this.messages = new MessagesCollection();
    this.memberIds = memberIds;
  }

  addMessage(addresseeId, content) {
    return this.messages.add({
      chatId: this._id,
      addresseeId: addresseeId,
      content: content
    });
  }
}