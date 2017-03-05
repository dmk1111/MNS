import {otherStaffHtml} from './other.staff.html';
import {Component, Input} from '@angular/core';
import { StaffAction } from '../../../action/staff.action';
@Component({
  selector: 'other-staff',
  template: otherStaffHtml
})

export default class OtherStaffComponent {
  @Input() data;
  private form;
  constructor(private action: StaffAction) {}
  ngOnInit() {
    this.form = Object.assign({}, this.data);
  }
  onChange(key, event) {
    let obj = {};
    obj[key] = event.target.value;
    this.action.setUpdateStaff('other', obj);
    this.action.setOtherStaff(key, event.target.value);
  }
}
