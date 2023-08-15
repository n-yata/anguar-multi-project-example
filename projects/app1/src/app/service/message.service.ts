import { Injectable } from '@angular/core';
import { CommonMessages } from '../const/common-messages';
import { MessageType } from '../const/message-type';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messages: Map<string, MessageType> = CommonMessages;

  constructor() {}

  /**
   * 共通メッセージマップにアプリごとのメッセージマップをマージする
   * @param messages
   */
  mergeMessages(messages: Map<string, MessageType>) {
    this.messages = new Map([
      ...Array.from(this.messages.entries()),
      ...Array.from(messages.entries()),
    ]);
  }

  getMessage(code: string, ...args: any[]): string {
    let message = this.messages.get(code);

    if (message === undefined) {
      return '';
    }

    return this.format(message.value, ...args);
  }

  getMessageTuple(code: string, ...args: any[]): [string, string] {
    let message = this.messages.get(code);

    if (message === undefined) {
      return ['', ''];
    }

    return [message.code, this.format(message.value, ...args)];
  }

  /**
   * プレースホルダーをパラメータに置き換える
   * @param str
   * @param args
   * @returns
   */
  private format(str: string, ...args: any[]): string {
    for (const [i, arg] of args.entries()) {
      const regExp = new RegExp(`\\{${i}\\}`, 'g');
      str = str.replace(regExp, arg as string);
    }

    return str;
  }
}
