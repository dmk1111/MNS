import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { staffListHtml } from './staffList.html';
import { UserApiService } from '../../services/user.service';
import { StaffAction } from '../../action/staff.action';
import { ToastsManager } from 'ng2-toastr';


@Component({
  selector: 'staffList',
  template: staffListHtml
})
export class StaffListComponent {
  private staff;
  private column;
  private selectedStaff;
  private load;
  private open = false;

  constructor(public router: Router,
              private userApi: UserApiService,
              private toast: ToastsManager,
              private staffAction: StaffAction) {
  }
  ngOnInit() {
    this.column = [
      {name: '#', prop: 'id'},
      {name: 'П.І.Б', prop: 'fullName'},
      {name: 'Біографія', prop: 'biography'},
      {name: 'Категорії цивільних службовців', prop: 'categoriesCivilServants'}
    ];
    this.getStaff();
  }
  onSelect(event) {
    this.load = this.userApi.getStaff(event.selected[0].staffId)
      .subscribe(res => {
        this.selectedStaff = JSON.parse(JSON.stringify(res, undefined, 2));
        this.staffAction.setStaff(this.selectedStaff);
        this.openModal();
      }, err => {
        this.selectedStaff = undefined;
      });
  }
  getStaff() {
    this.load = this.userApi.getStaffList().subscribe(res => {
      this.staff = res
        .map(el => Object.assign({}, el.mainStaffDTO, {staffId: el.id}));
    }, error => {
      this.toast.error(error);
    });
  }
  openModal() {
    this.open = true;
  }
  closeHandle(event) {
    if (event) {
      this.getStaff();
    }
    this.open = false;
  }
}
