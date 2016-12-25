import { Component, Input } from '@angular/core';
import { educationStaffHtml } from './education.staff.html';
import { StaffAction } from '../../../action/staff.action';
import { EducationService } from '../../../services/education.service';
import * as _ from 'lodash';
import { ToastsManager } from 'ng2-toastr';
@Component({
  selector: 'education-staff',
  template: educationStaffHtml
})

export default class EducationStaffComponent {
  @Input() data;
  @Input() id;
  private form;
  private load;
  constructor(private action: StaffAction, private eduApi: EducationService, private toast: ToastsManager) {}
  ngOnInit() {
    this.form = this.data.mainEducationBlocks;
  }
  addEdu() {
    this.form.push({});
  }
  del(obj) {
    if (obj.id) {
      let conf = confirm('Видалити??');
      if (conf) {
        this.load = this.eduApi.deleteEducation(this.id, obj.id)
          .subscribe(res => {
            this.toast.success('Успіщно видалено');
            let i;
            this.form.forEach((el, index) => {
              if (el.id === obj.id)
                i = index;
            });
            this.form.splice(i, 1);
            this.action.deleteEducation(obj);
            this.action.delEduUpdate(obj);
          });
      }
    } else {
      this.action.deleteEducation(obj);
      this.form = this.form
        .filter(el => !_.isEqual(el, obj));
    }
  }
  onChange(event, key, index) {
    this.action.setUpdateStaffEducation(this.form[index], index);
    this.action.setStaffEducation(key, event.target.value, index);
  }
}
