import { baseStaffHtml } from './base.staff.html';
import { Store } from '@ngrx/store';
import { StaffAction } from '../../../action/staff.action';
import { Input, Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'base-staff',
  template: baseStaffHtml,
  styles: [`
      .lable {
        text-align: center;
        margin-top: 2%;
      }
  `]
})

export class BaseStaffComponent {
  @Output('onDestroy') onDestroy = new EventEmitter();
  @Input() data;
  private formObject;
  private isChange = false;
  private translation = {
    id: 'ID',
    fullName: 'ПІБ',
    dateOfBirth: 'Дата народження',
    position: 'Посада',
    specialRank: 'Спецзвання',
    dateConferringSpecRanks: 'дата присвоєння спецзвання',
    numberConferringSpeclRanks: 'номер присвоєння спецзвання',
    dateNumberPurpose: 'Дата призначення',
    contractFromDate: 'Контракт з',
    contractToDate: 'Контракт по',
    exemptionDate: 'Дата звільнення',
    exemptionNumOrder: 'Номер звільнення',
    dateSwear: 'Дата прийнятя присяги',
    rankCivilServant: 'Ранг державного службовця',
    categoriesCivilServants: 'Категорія державного службовця',
    groupRemuneration: 'Група оплати праці',
    lastCertification: 'Дата останьої атестації',
    concludedCertification: 'Висновок атестації',
    personnelProvisionForPost: 'Кадровий резерв на посаду',
  };
  constructor(private store: Store<any>,
              private action: StaffAction) {}
  ngOnInit() {
    // this.formObject = Object.keys(this.data)
    //   .filter(el => typeof this.data[el] === 'string' || typeof this.data[el] === 'number' || this.data[el] === null)
    //   .map(key => {
    //     let type = '';
    //     if (key.toLowerCase().search('date') !== -1
    //       || key.toLowerCase().search('lastCertification') !== -1) {
    //       type = 'date';
    //     } else {
    //       type = typeof this.data[key];
    //     }
    //     let val;
    //     if (type === 'date') {
    //       val = this.data[key];
    //     }
    //     return {
    //       type: type === 'string' ? 'text' : type,
    //       key: key,
    //       value: type === 'date' ? val : this.data[key]
    //     };
    //   });
  }
  translate(key) {
    return this.translation[key] ? this.translation[key] : key;
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
