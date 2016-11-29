import { Component, Input } from '@angular/core';
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
  constructor(private toast: ToastsManager,
              private fileApi: FileService) {}
  ngOnInit() {
    this.getDocs();
  }
  getDocs() {
    this.fileApi.getDocuments(this.id)
      .subscribe(res => {
        this.docs = res;
      });
  }
  handle(file) {
    this.fileApi.uploadDocument(file.target.files[0], this.id)
      .subscribe(res => {
        if (res.success) {
          this.getDocs();
          this.toast.success('Успішно завантажено');
        }
      });
  }
}
