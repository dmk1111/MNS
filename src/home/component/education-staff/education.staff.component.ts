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
  onChange(event, key, index) {
    this.action.setUpdateStaffEducation(key, event.target.value, index);
    this.action.setStaffEducation(key, event.target.value, index);
  }
}
