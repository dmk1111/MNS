import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { staffEditHtml } from './staffEditModal.html';
import { UserApiService } from '../../../services/user.service';
import { Store } from '@ngrx/store';
import { StaffAction } from '../../../action/staff.action';
import { ToastsManager } from 'ng2-toastr';
// import * as _ from 'lodash';
import * as moment from 'moment';
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
  private avatar;

  constructor(public router: Router,
              private action: StaffAction,
              private toast: ToastsManager,
              private store: Store<any>,
              private userApi: UserApiService) {
  }
  ngOnInit() {
    this.unsubscribe.push(this.store.select('staff')
      .subscribe(staff => {
        this.staff = staff;
        if (!this.avatar)
          this.avatar = 'img/profile.jpg';
      }));
  }
  updateArr(event) {
    this.needUpdate.push(event);
  }
  save() {
    let obj = this.store['source']['value'];
    let finaleObj = {};
    let updateObj = obj.updateStaff;
    // updateObj.education.mainEducationBlocks = updateObj.education.mainEducationBlocks
    //   .filter(el => el !== null);
    Object
      .keys(updateObj)
      .forEach(key => {
        if (updateObj[key] instanceof Array ) {
          updateObj[key] = updateObj[key]
            .filter(el => el !== null)
            .map(el => {
              Object.keys(el).forEach(elKey => {
                if (elKey.toLowerCase().search('date') !== -1) {
                  el[elKey] = moment(el[elKey]).format('YYYY-MM-DD');
                }
              });
              return el;
            });
          if (updateObj[key].length > 0) {
            finaleObj[key] = Object.assign([], updateObj[key]);
          }
        } else {
          finaleObj[key] = updateObj[key];
        }
      });

    this.userApi.saveStaff(obj.staff.id, finaleObj)
      .subscribe(res => {
        this.toast.success('успішно збережено');
        this.action.clearUpdateObj();
        this.onClose.emit(null);
      }, err => { this.toast.error('Error'); });
  }
  delete() {
    let obj = this.store['source']['value'];
    this.userApi.deleteStaff(obj.staff.id)
      .subscribe(res => {
        this.toast.success('Delete success');
        this.onClose.emit(true);
      });
  }
  close() {
    this.action.clearUpdateObj();
    this.onClose.emit();
  }
  ngOnDestroy() {
    this.unsubscribe.forEach(el => el.unsubscribe());
  }
}
