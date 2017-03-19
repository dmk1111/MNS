import { Component, Input } from '@angular/core';
import { premiumFinesHtml } from './premiumFines.html';
import { StaffAction } from '../../../action/staff.action';
import * as _ from 'lodash';
const Stjagnenja = 'S';
const Zaohochenja = 'Z';
@Component({
  selector: 'staff-premium-fines',
  template: premiumFinesHtml
})
export class PremiumFinesComponent {
  @Input() data;
  private form = [];
  private tabIndex = 1;
  private formS = [];
  private formZ = [];
  constructor(private action: StaffAction) {}
  ngOnInit() {
    this.formS = this.data.filter(el => el.type === Stjagnenja);
    this.formZ = this.data.filter(el => el.type === Zaohochenja);
    this.form = this.formS;
  }
  sort(index) {
    this.tabIndex = index;
    this.form = index === 1 ? this.formS : this.formZ;
  }
  add() {
    this.tabIndex === 1 ?
      this.formS.push({type: Stjagnenja }) :
      this.formZ.push({type: Zaohochenja});
  }
  del(obj) {
    this.action.delFromUpdateArr('premiumFines', obj);
    this.form = this.form.filter(el => !_.isEqual(el, obj));
  }
  onChange(event, key, index) {
    if (this.tabIndex === 1) {
      this.action.setUpdatePremiumFined(this.form[index], index);
      this.action.setStaffPremiumFines(key, event.target.value, index);
    } else {
      this.action.setUpdatePremiumFined2(this.form[index], index);
    }
  }
}
