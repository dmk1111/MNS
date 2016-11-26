import { Component } from '@angular/core';
import { baseStaffHtml } from './base.staff.html';
import { Store } from '@ngrx/store';
import { StaffAction } from '../../../action/staff.action';
@Component({
  selector: 'base-staff',
  template: baseStaffHtml
})

export class BaseStaffComponent {
  constructor(private store: Store<any>, private action: StaffAction) {}
  ngOnInit() {
  }
}
