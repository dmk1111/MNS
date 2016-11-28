import {Component, Input} from "@angular/core";
import {BenefitsHtml} from "./benefits.component.html";
import { StaffAction } from '../../../action/staff.action';
import { BenefitsService } from '../../../services/benefits.service';
import { ToastsManager } from 'ng2-toastr';
import * as _ from 'lodash';

@Component({
  selector: 'benefits',
  template: BenefitsHtml
})
export class BenefitsComponent {
  @Input() data;
  @Input() id;
  private form;
  constructor(private action: StaffAction,
              private benService: BenefitsService,
              public toast: ToastsManager) {}
  ngOnInit() {
    this.form = this.data;
  }
  ngOnChanges() {
    this.form = this.data;
  }
  addBenefits() {
    this.form.push({});
  }
  onChange(event, key, index) {
    this.action.setUpdateBenefits(this.form[index], index);
    this.action.setStaffBenefits(key, event.target.value, index);
  }
  del(obj) {
    if (!obj.id) {
      this.action.delFromUpdateArr('benefits', obj);
      this.form = this.form.filter(el => !_.isEqual(el, obj));
    } else {
      this.benService.deleteBenefits(this.id, obj.id)
        .subscribe(res => {
          if (res.success) {
            this.toast.success('Успішно видалено');
            this.action.delFromArr('benefits', obj.id);
            this.action.delFromUpdateArr('benefits', obj);
          }
        });
    }
  }
}
