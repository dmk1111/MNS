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
  @Output() onClose = new EventEmitter();
  public regions = [];
  constructor(private userService: UserApiService) {}
  ngOnInit() {
    this.regions = [
      {value: 1, label: 'test'},
      {value: 2, label: 'test1'},
      {value: 3, label: 'test21'},
    ];
  }
  close() {
    this.onClose.emit(null);
  }
}
