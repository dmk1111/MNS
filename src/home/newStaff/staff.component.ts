import { Component } from '@angular/core';
@Component({
  selector: 'newStaff',
  template: require('./staff.html'),
  styles: [require('./staff.css')]
})
export class NewStaffComponent {
  constructor() {}
  ngOnInit() {
    console.log('in on init new staff');
  }
}
