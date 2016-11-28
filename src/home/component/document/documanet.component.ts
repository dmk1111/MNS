import { Component, Input } from '@angular/core';
import { StaffAction } from '../../../action/staff.action';
import { ToastsManager } from 'ng2-toastr';
import { staffDocumetHtml } from './documents.html';
import { FileService } from '../../../services/file.service';
@Component({
  selector: 'staff-document',
  template: staffDocumetHtml
})
export class DocumentComponent {
  @Input() id;
  private docs = [];
  private column = [];
  constructor(private action: StaffAction,
              private toast: ToastsManager,
              private fileApi: FileService) {}
  ngOnInit() {
    this.fileApi.getDocuments(this.id)
      .subscribe(res => {
        this.docs = res;
      });
    this.column = [
      {name: 'ID'},
      {name: 'Full Name', prop: 'fullName'},
      {prop: 'biography', name: 'BIO'},
      {prop: 'categoriesCivilServants', name: 'Category'}
    ];
  }
  handle(file) {
    debugger
    this.fileApi.uploadDocument(file.target.files[0], this.id)
      .subscribe(res => {debugger});
  }
}
