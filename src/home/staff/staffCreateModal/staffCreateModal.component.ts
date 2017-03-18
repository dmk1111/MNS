import { Component, EventEmitter, Output, Input } from '@angular/core';
import { staffCreateModalHtml } from './staffCreate.html';
import { UserApiService } from '../../../services/user.service';
import { ToastsManager } from 'ng2-toastr';
@Component({
  selector: 'create-staff',
  template: staffCreateModalHtml,
  styles: [require('./createStaff.css')]
})
export class CreateStaffModal {
  @Input() regions;
  @Output() onClose = new EventEmitter();
  private regionsObj;
  private staff;
  private serRegions;
  constructor(private staffApi: UserApiService, private toast: ToastsManager) {}
  ngOnInit() {
    this.regionsObj = this.regions;
    this.serRegions = JSON.parse(localStorage.getItem('regions'));
    this.regions = this.regions
      .filter(el => {
        return this.serRegions.find(k => k.id === el.id) ? true : false;
      })
      .map(el => {
        return {value: el.id, label: el.name};
      });
    this.staff = {};
  }
  create() {
    let obj = {
      mainStaffDTO: {
        fullName: this.staff.firstName  + ' ' + this.staff.lastName
      },
      regionId: this.staff.region
    };
    if (obj.regionId) {
      this.staffApi.createStaff(obj)
        .subscribe(res => {
          this.toast.success('Успішно збережено')
          this.onClose.emit(true);
        });
    } else {
      this.toast.error('Виберіть регіон');
    }
  }
  close() {
    this.onClose.emit(false);
  }
}
