import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

const styles = require('./home.css');
const template = require('./home.html');

@Component({
  selector: 'home',
  template: template,
  styles: [styles]
})
export class Home {
  private isAdmin: boolean = false;
  private access;
  constructor(public router: Router, private auth: AuthService) {}
  ngOnInit() {
    this.auth.me().subscribe(user => {
      if (user.roleName === 'ROLE_ADMIN') {
        localStorage.setItem('access', 'admin');
        this.isAdmin = true;
      } else {
        localStorage.setItem('access', 'operator');
      }
      localStorage.setItem('regions', JSON.stringify(user.regions));
    }, err => { console.log(err); });
    this.access = localStorage.getItem('access');
    if (this.access === 'admin')
      this.isAdmin = true;
  }
  logOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
