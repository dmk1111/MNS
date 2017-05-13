import { Component } from '@angular/core';
import { usersHtml } from './user.html';
import { ToastsManager } from 'ng2-toastr';
import { UserApiService } from '../../../services/user.service';
@Component({
  selector: 'users',
  template: usersHtml
})

export class UsersComponent {
  private users: Array<Object> = [];
  private column = [];
  private settings: Object;
  private load;
  private regions;
  private showEdit = false;
  private user = undefined;
  constructor(private userApi: UserApiService, private toast: ToastsManager) {}

  ngOnInit() {
      this.column = [
        {name: '#', prop: 'id'},
        {name: 'Імя', prop: 'firstName'},
        {name: 'Прізвище', prop: 'lastName'},
        {name: 'Пошта', prop: 'email'},
        {name: 'Роль', prop: 'roleName'}
      ];
      this.getUsers();
  }
  getUsers() {
    this.load = this.userApi.getUsers()
      .subscribe(
        data => { this.users = data; this.user = this.users[0]; },
        error => { this.toast.error('OOps'); }
        );
    this.userApi.getRegions()
      .subscribe(
        res => { this.regions = res; },
        error => { this.toast.error('OOps'); }
      );
  }
  handleSelect(event) {
    this.user = event.selected[0];
    this.showEdit = true;
  }
  save(flag) {
    if (flag) {
      this.getUsers();
    }
    this.modalClose();
  }
  openCreate() {
    this.user = undefined;
    this.showEdit = true;
  }
  modalClose() {
    this.user = null;
    this.showEdit = false;
  }
}
