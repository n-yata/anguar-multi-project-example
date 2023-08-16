import { Component } from '@angular/core';
import { Code404Error } from '../errors/code404.error';
import { RetryError } from '../errors/retry.error';
import { Code500Error } from '../errors/code500.error';

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

  throw404Error() {
    throw new Code404Error();
  }

  throw500Error() {
    throw new Code500Error();
  }

  throwRetryError() {
    throw new RetryError();
  }
}
