import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'position-book',
  template: require('./positionBook.html')
})
export class PositionBook {
  private tabIndex = 2;
  constructor(private router: Router) {}
  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['home/menu']);
  }
}
