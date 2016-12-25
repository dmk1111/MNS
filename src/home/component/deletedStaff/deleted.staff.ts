import { Component } from '@angular/core';
import { deeletedStaffHtml } from './deleted.staff.html';
import { UserApiService } from '../../../services/user.service';
import { ToastsManager } from 'ng2-toastr';
@Component({
  selector: 'deleted-staff',
  template: deeletedStaffHtml
})
export class DeleteStaffComponent {
  private staff = [];
  private column = [];
  private load;
  constructor(private staffApi: UserApiService, private toast: ToastsManager) {}
  ngOnInit() {
    this.column = [
      {name: '#', prop: 'id'},
      {name: 'П.І.Б', prop: 'fullName'},
      {name: 'Біографія', prop: 'biography'},
      {name: 'Категорії цивільних службовців', prop: 'categoriesCivilServants'}
    ];
    this.getStaff();
  }
  getStaff() {
    this.load = this.staffApi.getDeletedStaff()
      .subscribe(res => {
        this.staff = res.map(el => Object.assign({}, el.mainStaffDTO, {id: el.id}));
      }, err => {
        this.toast.error(err);
      });
  }
}
