import { Component } from '@angular/core';
import { usersHtml } from './user.html';
import { UserApiService } from '../../services/user.service';
@Component({
  selector: 'users',
  template: usersHtml
})

export class UsersComponent {
  private users: Array<Object> = [];
  private column = [];
  private settings: Object;
  private load;
  private showEdit = false;
  private user = {};
  constructor(private userApi: UserApiService) {}

  ngOnInit() {
    this.settings = {
      columns: {
        id: { title: '#' },
        firstName: { title: 'Імя' },
        lastName: { title: 'Прізвище' },
        email: { title: 'Пошта' },
        roleName: { title: 'Роль' },
      }
    };
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
      .subscribe(data => { this.users = data; this.user = this.users[0]; });
  }
  onSelect(user) {
    this.user = user;
    this.showEdit = true;
  }
  handleSelect(event) {
    this.showEdit = true;
  }
  modalClose() {
    this.showEdit = false;
  }
}
