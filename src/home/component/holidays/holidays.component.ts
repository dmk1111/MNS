import { holidaysHtml } from './golidays.html';
import { Component, Input } from '@angular/core';
import { StaffAction } from '../../../action/staff.action';
import { HolidaysService } from '../../../services/holidays.service';
import { ToastsManager } from 'ng2-toastr';
import * as _ from 'lodash';

@Component({
  selector: 'staff-holidays',
  template: holidaysHtml
})
export class HolidaysComponent {
  @Input() data;
  @Input() id;
  private form = [];
  constructor(private action: StaffAction,
              private hApi: HolidaysService,
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
    this.action.setUpdateHolidays(this.form[index], index);
    this.action.setStaffHolidays(key, event.target.value, index);
  }
}
