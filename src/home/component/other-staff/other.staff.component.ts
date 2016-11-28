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
    this.form = {
      "birthplace" : "amsterdaaaaaamnaaqqq",
      "sex" : "admin",
      "citizenship" : "q.qwe.qwe",
      "seriesAndPassportNumber" : "admin",
      "seriesAndNumberOfOfficialIdentification" : "re432432342342",
      "identificationCode" : "dsfa2123123123123132",
      "placeOfResidence" : "jghfgdsafgds",
      "phoneNumbers" : "admin",
      "maritalStatus" : "hdfssdds",
      "wifeHusband" : "aaaaaaaaaaaaaaaaa",
      "children" : "jgfghgdsa"
    };
    this.form = Object.assign({}, this.data);
  }
  onChange(key, event) {
    let obj = {};
    obj[key] = event.target.value;
    this.action.setUpdateStaff('other', obj);
    this.action.setOtherStaff(key, event.target.value);
  }
}
