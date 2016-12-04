import { Component, Input } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { staffDocumetHtml } from './documents.html';
import { FileService } from '../../../services/file.service';
import { Response } from '@angular/http';
@Component({
  selector: 'staff-document',
  template: staffDocumetHtml
})
export class DocumentComponent {
  @Input() id;
  public isRequesting = false;
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
    this.isRequesting = true;
    this.fileApi.uploadDocument(file.target.files[0], this.id)
      .subscribe(res => {
        if (res.success) {
          this.getDocs();
          this.isRequesting = false;
          this.toast.success('Успішно завантажено');
        }
      }, err => {
        this.isRequesting = false;
      });
  }
  downloadDoc(doc) {
    this.fileApi.getDocument(this.id, doc.id)
      .subscribe(res => {
         this.downloadFile(res);
      });
  }
  downloadFile(data: Response) {
    var blob = new Blob([data], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
    window.open(url);
  }
}
