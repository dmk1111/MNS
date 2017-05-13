import { Component } from '@angular/core';
@Component({
  selector: 'admin',
  template: require('./home.html')
})
export class AdminComponent {
  private tabIndex: number = 0;
  constructor() {}
  ngOnInit() {

  }
}
