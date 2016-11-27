import { baseStaffHtml } from './base.staff.html';
import { Store } from '@ngrx/store';
import { StaffAction } from '../../../action/staff.action';
import { Input, Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'base-staff',
  template: baseStaffHtml,
  styles: [`
      
  `]
})

export class BaseStaffComponent {
  @Output('onDestroy') onDestroy = new EventEmitter();
  @Input() data;
  private formObject;
  private isChange = false;
  constructor(private store: Store<any>,
              private action: StaffAction) {}
  ngOnInit() {
    this.formObject = Object.keys(this.data)
      .filter(el => typeof this.data[el] === 'string' || typeof this.data[el] === 'number')
      .map(key => {
        let type = '';
        if (key.toLowerCase().search('date') !== -1
          || key.toLowerCase().search('lastCertification') !== -1) {
          type = 'date';
        } else {
          type = typeof this.data[key];
        }
        let val;
        if (type === 'date') {
          val = new Date(this.data[key]).toLocaleDateString().split('/');
          val = `${val[2]}-${val[1]}-${val[0]}`;
          debugger
        }
        return {
          type: type === 'string' ? 'text' : type,
          key: key,
          value: type === 'date' ? val : this.data[key]
        };
      });
  }
  onChange(key, event) {
    let obj = {};
    obj[key] = event.target.value;
    this.action.setUpdateStaff('mainStaff', obj);
    this.action.setStaffBase(key, event.target.value);
  }
  ngOnDestroy() {
    if (this.isChange) {
      this.onDestroy.emit('mainStaff');
    }
  }
}
