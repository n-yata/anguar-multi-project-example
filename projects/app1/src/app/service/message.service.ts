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
  mergeMessages(messages: Map<string, MessageType>): void {
    this.messages = new Map([
      ...Array.from(this.messages.entries()),
      ...Array.from(messages.entries()),
    ]);
  }

  /**
   * メッセージコードを基にメッセージを返却する
   * メッセージが取得できない場合、undefinedを返却する
   * @param code
   * @param args
   * @returns
   */
  getMessage(code: string, ...args: any[]): string | undefined {
    let message = this.messages.get(code);

    if (message === undefined) {
      return undefined;
    }

    return this.format(message.value, ...args);
  }

  /**
   * メッセージコードを基にコード、メッセージを返却する
   * 該当メッセージが存在しない場合、undefinedを返却する
   * @param code
   * @param args
   * @returns
   */
  getMessageTuple(
    code: string,
    ...args: any[]
  ): { code: string; value: string } | undefined {
    let message = this.messages.get(code);

    if (message === undefined) {
      return undefined;
    }

    return {
      code: message.code,
      value: this.format(message.value, ...args),
    };
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
