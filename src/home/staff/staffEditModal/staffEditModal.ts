import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { staffEditHtml } from './staffEditModal.html';
import { UserApiService } from '../../../services/user.service';
import { Store } from '@ngrx/store';
import { StaffAction } from '../../../action/staff.action';
import { ToastsManager } from 'ng2-toastr';
// import * as _ from 'lodash';
const modal = require('./modal.css');
import * as moment from 'moment';
import { FileService } from '../../../services/file.service';
@Component({
  selector: 'staffModal',
  template: staffEditHtml,
  styles: [modal]
})
export class StaffEditModalComponent {
  @Output() onClose = new EventEmitter();
  private tabIndex = 1;
  private unsubscribe = [];
  private needUpdate = [];
  private staff;
  private avatar;
  private load;
  private title: string;
  private photo;
  private regions;
  private userRegion: any[];
  private userBar: {region: any, phone: string, showEdit?: boolean, regionShow?: boolean } = { region: '', phone: ''};

  constructor(public router: Router,
              private action: StaffAction,
              private toast: ToastsManager,
              private store: Store<any>,
              private fileService: FileService,
              private userApi: UserApiService) {
  }
  ngOnInit() {
    this.unsubscribe.push(this.store.select('staff')
      .subscribe(staff => {
        this.staff = staff;
        this.userApi.getRegions()
          .subscribe(
            res => {
              this.regions = res.map(el => {
                return {value: el.id, label: el.name};
              });
            },
            error => { this.toast.error('OOps'); }
          );
        this.userBar = {
          phone: this.staff.mainStaff.phoneNumber,
          region: `${this.staff.region.id}`,
          showEdit: true
        };
        this.userRegion = [this.staff.region.id];
        this.title = `${this.staff.mainStaff.position}, назва структурного підрозділу, призначено наказом  №${this.staff.mainStaff.numberPurpose} від ${this.staff.mainStaff.dateNumberPurpose}`;
        this.getAvatar();
        if (!this.avatar)
          this.avatar = 'img/profile.jpg';
      }));
  }
  regionChange(event) {
    let newRegion = event;
    this.userApi.saveStaff(this.staff.id, { region: { id: newRegion.value, name: newRegion.label}})
      .subscribe(res => {
        this.toast.success('Регіон змінено');
        this.userRegion = [ newRegion.value ];
      });

  }
  onPhoneChange(event) {
    this.userBar.phone = event.target.value;
    this.userApi.saveStaff(this.staff.id, { mainStaff: { phoneNumber: this.userBar.phone } })
      .subscribe(res => {
        this.toast.success('Успішно збережено');
        this.userBar.showEdit = false;
      });
  }
  updateArr(event) {
    this.needUpdate.push(event);
  }
  getAvatar() {
    this.fileService.getPhoto(this.store['source']['value'].staff.id)
      .subscribe(res => {
        this.avatar = 'data:image/png;base64,' + res['_body'];
      });
  }
  save() {
    let obj = this.store['source']['value'];
    let finaleObj = {};
    let updateObj = obj.updateStaff;
    Object
      .keys(updateObj)
      .forEach(key => {
        if (updateObj[key] instanceof Array ) {
          updateObj[key] = updateObj[key]
            .filter(el => el !== null)
            .map(el => {
              Object.keys(el).forEach(elKey => {
                if (elKey.toLowerCase().search('date') !== -1) {
                  el[elKey] = moment(el[elKey]).format('YYYY-MM-DD');
                }
              });
              return el;
            });
          if (updateObj[key].length > 0) {
            finaleObj[key] = Object.assign([], updateObj[key]);
          }
        } else {
          if (key === 'education') {
            let mainEduBlock = updateObj[key].mainEducationBlocks.filter(e => e);
            if (mainEduBlock.length) {
              finaleObj[key] = Object.assign({}, {mainEducationBlocks: mainEduBlock});
            }
          } else {
            finaleObj[key] = Object.assign({}, updateObj[key]);
          }
        }
      });
    if (finaleObj['premiumFinesS'] && finaleObj['premiumFinesS'].length) {
      finaleObj['premiumFines'] = finaleObj['premiumFinesS'];
      delete finaleObj['premiumFinesS'];
      if (finaleObj['premiumFinesZ'] && finaleObj['premiumFinesZ'].length) {
        finaleObj['premiumFines'] = finaleObj['premiumFines'].concat(finaleObj['premiumFinesZ']);
        delete finaleObj['premiumFinesZ'];
      }
    } else if (finaleObj['premiumFinesZ'] && finaleObj['premiumFinesZ'].length) {
      finaleObj['premiumFines'] = finaleObj['premiumFinesZ'];
    }
    this.load = this.userApi.saveStaff(obj.staff.id, finaleObj)
      .subscribe(res => {
        this.toast.success('успішно збережено');
        this.action.clearUpdateObj();
        // this.onClose.emit(null);
      }, err => {
        this.toast.error('Error');
      });
  }
  delete() {
    if (confirm('Видалити*??')) {
      let obj = this.store['source']['value'];
      this.load = this.userApi.deleteStaff(obj.staff.id)
        .subscribe(res => {
          this.toast.success('Delete success');
          this.onClose.emit(true);
        });
    }
  }
  close() {
    this.action.clearUpdateObj();
    this.onClose.emit(true);
  }
  ngOnDestroy() {
    this.unsubscribe.forEach(el => el.unsubscribe());
  }
  uploadPhoto(photo) {
    this.fileService.uploadFoto(event.target['files'][0], this.store['source']['value'].staff.id)
      .subscribe(res => {
        if (res.success) {
         this.toast.success('Фото успішно завантажено');
          this.getAvatar();
        }
      });
  }
}
