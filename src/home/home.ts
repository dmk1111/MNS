import { Component } from '@angular/core';
import { Router } from '@angular/router';

const styles = require('./home.css');
const template = require('./home.html');

@Component({
  selector: 'home',
  template: template,
  styles: [styles]
})
export class Home {
  private isAdmin: boolean = false;
  constructor(public router: Router) {
  }
  ngOnInit() {
    let access = localStorage.getItem('access');
    if (access === 'admin')
      this.isAdmin = true;
  }
  logOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
