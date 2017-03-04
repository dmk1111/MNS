import { Component, Input } from '@angular/core';
import { StaffAction } from '../../../action/staff.action';
import { ToastsManager } from 'ng2-toastr';
import { hospitalView } from './hospitals.ht';
import * as _ from 'lodash';
@Component({
  selector: 'hospitals',
  template: hospitalView
})
export class HospitalsComponent {
  @Input() data;
  @Input() id;
  private form = [];
  constructor(private action: StaffAction,
              private toast: ToastsManager) {}
  ngOnInit() {
    this.form = this.data;
  }
  ngOnChanges() {
    this.form = this.data;
  }
  del(obj) {
    this.action.delFromUpdateArr('holidays', obj);
    this.form = this.form.filter(el => !_.isEqual(el, obj));
  }
  add() {
    this.form.push({});
  }
  onChange(event, key, index) {
    this.action.setUpdateHospital(this.form[index], index);
    this.action.setStaffHospital(key, event.target.value, index);
  }
}
