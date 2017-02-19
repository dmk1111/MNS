import { Component, EventEmitter, Output, Input } from '@angular/core';
import { staffCreateModalHtml } from './staffCreate.html';
import { UserApiService } from '../../../services/user.service';
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

  constructor(private staffApi: UserApiService) {}
  ngOnInit() {
    this.regionsObj = this.regions;
    this.regions = this.regions.map(el => {
      return {value: el.id, label: el.name};
    });
    this.staff = {};
  }
  create() {
    let obj = {
      mainStaffDTO: {
        fullName: this.staff.firstName  + ' ' + this.staff.lastName
      },
      region: this.regionsObj.find(el => el.id === this.staff.region)
    };
    this.staffApi.createStaff(obj)
      .subscribe(res => { this.onClose.emit(true); });
  }
  close() {
    this.onClose.emit(false);
  }
}
