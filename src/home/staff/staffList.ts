import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { staffListHtml } from './staffList.html';
import { UserApiService } from '../../services/user.service';
import { StaffAction } from '../../action/staff.action';


@Component({
  selector: 'staffList',
  template: staffListHtml
})
export class StaffListComponent {
  private staff;
  private column;
  private selectedStaff;
  private open = false;

  constructor(public router: Router,
              private userApi: UserApiService,
              private staffAction: StaffAction) {
  }

  ngOnInit() {
    this.column = [
      {name: 'ID'},
      {name: 'Full Name', prop: 'fullName'},
      {prop: 'biography', name: 'BIO'},
      {prop: 'categoriesCivilServants', name: 'Category'}
    ];
    this.getStaff();
  }
  onSelect(event) {
    this.userApi.getStaff(event.selected[0].id)
      .subscribe(res => {
        this.selectedStaff = JSON.parse(JSON.stringify(res, undefined, 2));
        this.staffAction.setStaff(this.selectedStaff);
        this.openModal();
      }, err => {
        this.selectedStaff = undefined;
      });
  }
  getStaff() {
    this.userApi.getStaffList().subscribe(res => {
      this.staff = res
        .map(el => el.mainStaff);
    });
  }
  openModal() {
    this.open = true;
  }
}
