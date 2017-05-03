import { Component } from '@angular/core';
import { menuHtml } from './menu.html';
import { Router } from '@angular/router';
const styles = require('./style.css');
@Component({
  selector: 'menu',
  template: menuHtml,
  styles: [styles]
})
export class MenuComponent {
  constructor(private router: Router) {}
  goTo(to) {
    this.router.navigate(['home/staff']);
  }
}
