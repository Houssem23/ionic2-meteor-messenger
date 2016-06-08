import {DateFormatPipe} from 'angular2-moment';
import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/chat-detail/chat-detail.html',
  pipes: [DateFormatPipe]
})
export class ChatDetailPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, params) {
    this.nav = nav;
    this.chat = params.get('chat');
    this.message = '';
  }
}