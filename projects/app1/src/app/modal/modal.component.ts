import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(public _dialogRef: MatDialogRef<ModalComponent>) {}

  ngOnInit(): void {}

  /**
   * ダイアログを閉じる
   */
  closeModal() {
    this._dialogRef.close();
  }
}
