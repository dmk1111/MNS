import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { staffEditHtml } from './staffEditModal.html';
import { UserApiService } from '../../../services/user.service';
import { Store } from '@ngrx/store';


@Component({
  selector: 'staffModal',
  template: staffEditHtml,
  styles: []
})
export class StaffEditModalComponent {
  @Input() selectedStaff;
  @Output() onClose = new EventEmitter();
  private tabIndex = 1;

  constructor(public router: Router,
              private store: Store<any>,
              private userApi: UserApiService) {
  }
  ngOnInit() {
    this.store.select('staff')
      .subscribe(res => {
        debugger
      });
  }
  save() {
    this.onClose.emit(null);
  }
  close() {
    this.onClose.emit(null);
  }
}
