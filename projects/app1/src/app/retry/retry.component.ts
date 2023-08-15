import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app1-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css'],
})
export class RetryComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
