import { Component } from '@angular/core';
import { NominalBookService } from '../../../services/nomimnalBook.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'shtat',
  template: require('./shtat.html'),
  styles: [require('./style.css')]
})
export class ShtatComponent {
  private staff;
  constructor(private bookService: NominalBookService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.getStaff();
  }
  getStaff() {
    this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.bookService.getStaffByBook(id)
        .subscribe(res => {
          this.staff = res;
        });
    });
  }
}
