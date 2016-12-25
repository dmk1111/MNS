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

  constructor(public router: Router) {
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
