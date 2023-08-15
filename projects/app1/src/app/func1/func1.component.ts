import { Component } from '@angular/core';
import { StringUtils } from 'common';
import { MessagesService } from '../service/message.service';
import { App1Messages } from '../const/app1-messages';

@Component({
  selector: 'app1-func1',
  templateUrl: './func1.component.html',
  styleUrls: ['./func1.component.css'],
})
export class Func1Component {
  title: string = 'func1';
  message: string = StringUtils.getMessage('hello');
  text?: string;

  constructor(private messageService: MessagesService) {
    this.messageService.mergeMessages(App1Messages);
  }

  getText(): void {
    if (this.text !== undefined) {
      this.text = undefined;
      return;
    }
    this.text = this.messageService.getMessage('app_0001', '名前', 'こんちは');
  }
}
