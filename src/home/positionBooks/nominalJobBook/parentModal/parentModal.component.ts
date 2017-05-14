import { Input, Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'parent-modal',
  template: require('./parenModal.html')
})
export class ParentModalComponent {
  @Input() parentBook: any;
  @Output() closeEvent = new EventEmitter();
  private book = {};
  private isCreate = true;

  constructor() {}
  ngOnInit() {
    if (this.parentBook) {
      this.book = Object.assign({}, this.parentBook);
      this.isCreate = false;
    }
  }
  close() {
    this.closeEvent.emit({close: true});
  }
  create() {
    this.closeEvent.emit({ create: true, data: this.book });
  }
  save() {
    this.closeEvent.emit({ update: true, data: this.book });
  }
}
