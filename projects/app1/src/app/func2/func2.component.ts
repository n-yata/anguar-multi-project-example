import { Component } from '@angular/core';
import { Code404Error } from '../errors/code404.error';

@Component({
  selector: 'app1-func2',
  templateUrl: './func2.component.html',
  styleUrls: ['./func2.component.css'],
})
export class Func2Component {
  title: string = 'func2';

  throwError() {
    throw new Error();
  }

  throwCustomError() {
    throw new Code404Error();
  }
}
