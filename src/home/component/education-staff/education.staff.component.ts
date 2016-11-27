import { Component, Input } from '@angular/core';
import { educationStaffHtml } from './education.staff.html';
@Component({
  selector: 'education-staff',
  template: educationStaffHtml
})

export default class EducationStaffComponent {
  @Input() data;
  constructor() {}
  ngOnInit() {
    console.log(this.data)
  }
}
