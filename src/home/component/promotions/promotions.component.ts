import { Component, Input } from '@angular/core';
import { promotionsHtml } from './promotions.html';
import { StaffAction } from '../../../action/staff.action';
@Component({
  selector: 'staff-promotion',
  template: promotionsHtml
})
export class PromotionComponent {
  @Input() data;
  private form = [];
  constructor(private action: StaffAction) {}
  ngOnInit() {
    this.form = this.data;
  }
  add() { this.form.push({}); }

  onChange(event, key, index) {
    this.action.setUpdatePromotion(this.form[index], index);
    this.action.setStaffPromotion(key, event.target.value, index);
  }
}
