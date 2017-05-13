import { Component } from '@angular/core';
@Component({
  selector: 'position-book',
  template: require('./positionBook.html')
})
export class PositionBook {
  private tabIndex = 0;
  constructor() {}
  ngOnInit() {
  }
}
