import { Component } from '@angular/core';
import { StringUtils } from 'common';

@Component({
  selector: 'app1-func1',
  templateUrl: './func1.component.html',
  styleUrls: ['./func1.component.css']
})
export class Func1Component {
  title: string = 'func1';
  message: string = StringUtils.getMessage('hello');
}
