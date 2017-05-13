import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'admin',
  template: require('./home.html')
})
export class AdminComponent {
  private tabIndex: number = 0;
  constructor(private router: Router) {}
  ngOnInit() {

  }
  goBack() {
    this.router.navigate(['home/menu']);
  }
}
