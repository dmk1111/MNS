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
  private isAdmin: boolean = false;
  private access: string = localStorage.getItem('access');
  constructor(private router: Router) {}
  goTo(to) {
    this.router.navigate(['home/' + to]);
  }
  ngOnInit() {
    if (this.access === 'admin')
      this.isAdmin = true;
    }
}
