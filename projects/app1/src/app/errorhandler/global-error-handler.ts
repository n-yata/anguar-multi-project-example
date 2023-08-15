import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private router: Router) {}

  handleError(error: any) {
    console.error(error);

    if (typeof error.route === 'string') {
      this.router.navigate([error.route]);
      return;
    }

    this.router.navigate(['/retry']);
  }
}
