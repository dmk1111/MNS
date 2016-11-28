import { firedHtml } from './fired.html';
import { Component, Input } from '@angular/core';
import { StaffAction } from '../../../action/staff.action';
@Component({
  selector: 'staff-fired',
  template: firedHtml
})
export class FiredComponent {
  @Input() data;
  private form = [];
  constructor(private action: StaffAction) {}
  ngOnInit() {
    this.form = this.data;
  }
  add() { this.form.push({}); }

  onChange(key, event) {
    let obj = {};
    obj[key] = event.target.value;
    this.action.setUpdateStaff('fired', obj);
    this.action.setStaffFired(key, event.target.value);
  }
}
