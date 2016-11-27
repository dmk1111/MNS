import {Component, Input} from "@angular/core";
import {BenefitsHtml} from "./benefits.component.html";

@Component({
  selector: 'benefits',
  template: BenefitsHtml
})
export class BenefitsComponent {
  @Input() data;
  private form;
  constructor() {}
  ngOnInit() {
    this.form = [
      {
        "name": "sadacascx",
        "fromDate": "18.01.2017",
        "toDate": "12.11.2111",
        "order": "sadacascx",
        "orderDate": "2017-01-20",
        "certification": "dsafgsdgfsdfgfsdfs",
        "privilege": "sadacascx",
        "actsAndComments": "wwwwwwwwwwwwwwwwwwwwwwww",
        "otherInfo": "ascassssssssssssssssssssssxcasdcaxzczxczcascadwqaeqweqweqwe"
      }
    ]

  }
}
