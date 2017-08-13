import { Component } from '@angular/core';
import { HateOasService } from '../../../common/hateoaes.service';
@Component({
  selector: 'staffmain',
  template: require('./stafMain.html'),
  styles: [require('./staffMain.css')]
})
export class StaffMainComoponent {
    constructor(private hateoas: HateOasService) {}
    ngOnInit() {
      debugger;
  }
}
