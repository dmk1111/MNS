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
  public tabIndex = 1;
  private docs = [];
  private uploadFileName = '';
  constructor(private toast: ToastsManager,
              private fileApi: FileService) {}
  ngOnInit() {
    this.getDocs(1);
  }
  getDocs(index) {
    this.docs = [];
    this.fileApi.getDocuments(this.id, index)
      .subscribe(res => {
        this.docs = res;
      });
  }
  handleTab(index) {
    this.tabIndex = index;
    this.getDocs(index);
  }
  handle(file) {
    this.isRequesting = true;
    this.fileApi.uploadDocument(file.target.files[0], this.id, this.tabIndex, this.uploadFileName)
      .subscribe(res => {
        if (res.success) {
          this.getDocs(this.tabIndex);
          this.isRequesting = false;
          this.uploadFileName = '';
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
  deleteDocument(docId) {
    if (confirm('Видалити?')) {
      this.fileApi.deleteDocument(this.id, docId).subscribe(res => {
        this.toast.success('Успішно видалено');
        this.getDocs(this.tabIndex);
      });
    }
  }
  saveDocName(doc) {
    this.fileApi.editDocName(doc.id, doc.name)
      .subscribe(res => {
        this.toast.success('Імя файлу успішно змінено');
        doc.disambled = false;
      }, error => {
        this.toast.error('Не вдалось змінити назву файлу(');
        debugger
        doc.name = doc.oldName;
      });
  }
  enableEdit(i) {
    this.docs.forEach(el => {
      el.disambled = false;
    });
    this.docs[i].disambled = true;
    this.docs[i].oldName = `${this.docs[i].name}`;
  }
}
