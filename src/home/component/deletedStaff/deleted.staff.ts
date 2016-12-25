import { Component } from '@angular/core';
import { deeletedStaffHtml } from './deleted.staff.html';
import { UserApiService } from '../../../services/user.service';
@Component({
  selector: 'deleted-staff',
  template: deeletedStaffHtml
})
export class DeleteStaffComponent {
  private staff = [];
  private column = [];
  constructor(private staffApi: UserApiService) {}
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
    this.staffApi.getDeletedStaff()
      .subscribe(res => {
        this.staff = res.map(el => Object.assign({}, el.mainStaffDTO, {id: el.id}));
      });
  }
}
