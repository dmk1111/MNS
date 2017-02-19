import { Component, Input, Output, EventEmitter } from '@angular/core';
import { editUserModal } from './editUserComponentHtml';
import { UserApiService } from '../../../services/user.service';

@Component({
  selector: 'userEdit',
  template: editUserModal,
  styles: [require('./editUserModal.css')]
})
export class EditUserModal {
  @Input() user: any;
  @Input() regions;
  @Input() isCreate: boolean;
  @Output() onClose = new EventEmitter();
  private userRegion = [];
  constructor(private userService: UserApiService) {}
  ngOnInit() {
    if (!this.user)
      this.user = {};
    this.regions = this.regions.map(el => {
      return {value: el.id, label: el.name};
    });
    if (this.user.regions) {
      this.user.role = this.user.roleName;
      this.userRegion = this.user.regions
        .map(region => region.id);
      delete this.user.regions;
    }
  }
  save() {
    this.userService.saveUser(this.user)
      .subscribe(res => {
          this.userService.saveUserRegion(this.user.id, this.userRegion)
            .subscribe(response => {
              this.onClose.emit(true);
            });
      });
  }
  create() {
    this.user.password = 'admin';
    this.userService.saveUser(this.user)
      .subscribe(res => {
        let userId = res.id;
          this.userService.saveUserRegion(userId, this.userRegion)
            .subscribe(response => {
              this.onClose.emit(true);
            });
      });
  }
  close() {
    this.onClose.emit(false);
  }
}
