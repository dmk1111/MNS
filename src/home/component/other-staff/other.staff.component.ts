import {otherStaffHtml} from "./other.staff.html";
import {Component, Input} from "@angular/core";
@Component({
  selector: 'other-staff',
  template: otherStaffHtml
})

export default class OtherStaffComponent {
  @Input() data;
  private form;
  constructor() {}
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
  }
  }
}
