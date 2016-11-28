import { Component, Input } from '@angular/core';
import { promotionsHtml } from './promotions.html';
import { StaffAction } from '../../../action/staff.action';
import * as _ from 'lodash';

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
  del(obj) {
    this.action.delFromUpdateArr('promotions', obj);
    this.form = this.form.filter(el => !_.isEqual(el, obj));
  }
  onChange(event, key, index) {
    this.action.setUpdatePromotion(this.form[index], index);
    this.action.setStaffPromotion(key, event.target.value, index);
  }
}
