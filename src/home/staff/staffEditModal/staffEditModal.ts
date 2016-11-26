import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { staffEditHtml } from './staffEditModal.html';
import { UserApiService } from '../../../services/user.service';


@Component({
  selector: 'staffModal',
  template: staffEditHtml,
  styles: [`
.dialogModal {
  z-index: 99;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
}
    `]
})
export class StaffEditModalComponent {
  @Input() selectedStaff;
  @Output() onClose = new EventEmitter();

  constructor(public router: Router,
              private userApi: UserApiService) {
  }
  save() {
    this.onClose.emit(null);
  }
}
