import { Component } from '@angular/core';
import { StaffService } from './staff.service';
import { StaffPerson } from './staff.models';
@Component({
  selector: 'newStaff',
  template: require('./staff.html'),
  styles: [require('./staff.css')]
})
export class NewStaffComponent {
  public tabIndex: number = 1;
  private staff: StaffPerson;
  constructor(private staffService: StaffService) {}
  ngOnInit() {
    this.staffService.getFirstStaff()
      .subscribe(
        res => this.staff = res,
        err => console.log('Staff error, ', err)
      );
  }
  changeTab(tabI: number) {
    this.tabIndex = tabI;
  }
}
