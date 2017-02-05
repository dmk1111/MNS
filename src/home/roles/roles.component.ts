import { Component } from '@angular/core';
import { roleHtml } from './roles.html';
import { UserApiService } from '../../services/user.service';
@Component({
  selector: 'roles',
  template: roleHtml
})
export class RolesComponent {
  constructor(private userService: UserApiService) {}
  ngOnOnit() {
    this.load = this.userService.getRoles()
      .subscribe(res => this.roles = res);
  }
}
