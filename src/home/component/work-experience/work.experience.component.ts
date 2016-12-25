import {Component, Input} from '@angular/core';
import {WorkExperienceHtml} from './work.experience.component.html';
import { StaffAction } from '../../../action/staff.action';
import { WorkExperienceService } from '../../../services/work.experience.service';
import { ToastsManager } from 'ng2-toastr';
import * as _ from 'lodash';

@Component({
  selector: 'work-experience',
  template: WorkExperienceHtml
})

export default class WorkExperienceComponent {
  @Input() data;
  @Input() id;
  private form = [];
  private load;
  constructor(private action: StaffAction,
              private expApi: WorkExperienceService,
              private toast: ToastsManager) {}
  ngOnInit() {
    this.form = this.data;
  }
  del(obj) {
    if (obj.id) {
     this.load = this.expApi.deleteWorkExperience(this.id, obj.id)
        .subscribe(res => {
          if (res.success) {
            this.action.delFromArr('workExperiences', obj.id);
            this.action.delFromUpdateArr('workExperiences', obj);
            this.toast.success('Успішно видалено');
          }
        });
    } else {
      this.action.delFromUpdateArr('workExperiences', obj);
      this.action.delFromArr('workExperiences', obj.id);
    }
  }
  ngOnChanges() {
    this.form = this.data;
  }
  addExp() {
    this.form.push({});
  }
  onChange(event, key, index) {
    let obj = {
      id: this.form[index].id
    };
    obj[key] = event.target.value;
    this.action.setUpdateStaffWorkExp(obj, index);
    this.action.setStaffExp(key, event.target.value, index);
  }
}

