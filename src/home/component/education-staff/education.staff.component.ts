import { Component, Input } from '@angular/core';
import { educationStaffHtml } from './education.staff.html';
import { StaffAction } from '../../../action/staff.action';
@Component({
  selector: 'education-staff',
  template: educationStaffHtml
})

export default class EducationStaffComponent {
  @Input() data;
  private form;
  constructor(private action: StaffAction) {}
  ngOnInit() {
    this.form = this.data.mainEducationBlocks;
  }
  addEdu() {
    let testForm = this.form[0];
    let emptyEdu = Object.keys(testForm).map(key => {
      let a = {};
      a[key] = undefined;
      return a;
    });
    this.form.push(emptyEdu);
  }
  onChange(event, key, index) {
    this.action.setUpdateStaffEducation(key, event.target.value, index);
    this.action.setStaffEducation(key, event.target.value, index);
  }
}
