import { Component } from '@angular/core';

@Component({
  selector: 'common-common',
  template: `
    <p>
      common works!
    </p>
  `,
  styles: [
  ]
})
export class CommonComponent {
  getMessage(text: string) {
    return text + ' world';
  }
}
