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
      {name: 'id'},
      {name: 'Full Name', prop: 'fullName'},
      {prop: 'biography', name: 'BIO'},
      {prop: 'categoriesCivilServants', name: 'Category'}
    ];
    this.getStaff();
  }
  getStaff() {
    this.staffApi.getDeletedStaff()
      .subscribe(res => {
        this.staff = res;
      });
  }
}
