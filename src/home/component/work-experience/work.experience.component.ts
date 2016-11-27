import {Component, Input} from "@angular/core";
import {WorkExperienceHtml} from "./work.experience.component.html";
@Component({
  selector: 'work-experience',
  template: WorkExperienceHtml
})

export default class WorkExperienceComponent {
  @Input() data;
  private form;
  constructor() {}
  ngOnInit() {
    this.form = [
    {
      "orgName": "sadacascx",
      "fromDate": "18.01.2017",
      "toDate": "12.11.2111"
    },
    {
      "orgName": "qweqw",
      "fromDate": "18.01.2017",
      "toDate": "15.01.2221"
    },
    {
      "orgName": "11111",
      "fromDate": "12.11.2111",
      "toDate": "01.10.1111"
    }
    ]
  }
}

