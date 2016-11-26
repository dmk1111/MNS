import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { UserApiService } from '../services/user.service';

const styles = require('./home.css');
const template = require('./home.html');

@Component({
  selector: 'home',
  template: template,
  styles: [styles]
})
export class Home {
  private staff;
  private column;
  private selectedStaff;

  constructor(public router: Router, public http: Http,
              private userApi: UserApiService) {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
