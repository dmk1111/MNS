import {Component, Input} from '@angular/core';
import {WorkExperienceHtml} from './work.experience.component.html';
import { StaffAction } from '../../../action/staff.action';
import { WorkExperienceService } from '../../../services/work.experience.service';
import { ToastsManager } from 'ng2-toastr';
@Component({
  selector: 'work-experience',
  template: WorkExperienceHtml
})

export default class WorkExperienceComponent {
  @Input() data;
  @Input() id;
  private form = [];
  constructor(private action: StaffAction,
              private expApi: WorkExperienceService,
              private toast: ToastsManager) {}
  ngOnInit() {
    this.form = this.data;
  }
  del(id) {
    this.expApi.deleteWorkExperience(this.id, id)
      .subscribe(res => {
        if (res.success) {
          this.action.delFromArr('workExperiences', id);
          this.toast.success('Успішно видалено');
        }
      });
  }
  addExp() {
    this.form.push({});
  }
  onChange(event, key, index) {
    this.action.setUpdateStaffWorkExp(this.form[index], index);
    this.action.setStaffExp(key, event.target.value, index);
  }
}

