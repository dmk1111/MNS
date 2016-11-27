import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { staffEditHtml } from './staffEditModal.html';
import { UserApiService } from '../../../services/user.service';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';

@Component({
  selector: 'staffModal',
  template: staffEditHtml,
  styles: []
})
export class StaffEditModalComponent {
  @Output() onClose = new EventEmitter();
  private tabIndex = 1;
  private unsubscribe = [];
  private needUpdate = [];
  private staff;

  constructor(public router: Router,
              private store: Store<any>,
              private userApi: UserApiService) {
  }
  ngOnInit() {
    this.unsubscribe.push(this.store.select('staff')
      .subscribe(staff => {
        this.staff = staff;
      }));
  }
  updateArr(event) {
    this.needUpdate.push(event);
  }
  save() {
    this.onClose.emit(null);
  }
  close() {
    this.onClose.emit(null);
  }
  ngOnDestroy() {
    this.unsubscribe.forEach(el => el.unsubscribe())
  }
}
