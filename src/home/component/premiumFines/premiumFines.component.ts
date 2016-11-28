import { Component, Input } from '@angular/core';
import { premiumFinesHtml } from './premiumFines.html';
import { StaffAction } from '../../../action/staff.action';
@Component({
  selector: 'staff-premium-fines',
  template: premiumFinesHtml
})
export class PremiumFinesComponent {
  @Input() data;
  private form = [];
  constructor(private action: StaffAction) {}
  ngOnInit() {
    this.form = this.data;
  }
  add() { this.form.push({}); }

  onChange(event, key, index) {
    this.action.setUpdatePremiumFined(this.form[index], index);
    this.action.setStaffPremiumFines(key, event.target.value, index);
  }
}
