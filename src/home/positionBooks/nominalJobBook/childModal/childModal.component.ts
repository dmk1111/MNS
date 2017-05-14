import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Child } from '../nominalJobBook.component';
@Component({
  selector: 'child-modal',
  template: require('./childModal.html')
})
export class ChildModalComponent {
  @Input() childBook;
  @Input() regions;
  @Input() positions;
  @Output() closeEvent = new EventEmitter();
  private book: Object = {};
  private isCreate = true;
  private selectRegions;
  private bookSelectedPosition: Array<any>;
  private selectPositions;
  constructor() {}
  ngOnInit() {
    this.selectRegions = this.regions.map(el => { return { value: el.id, label: el.name }; });
    this.selectPositions = this.positions.map(el => { return { value: el.id, label: el.comment }; });
    if (this.childBook) {
      this.isCreate = false;
      this.book = Object.assign({}, this.childBook, { region : [this.childBook.region.id] });
      this.bookSelectedPosition = this.book['positions'].map(el => el.id);
    }
  }
  close() {
    this.closeEvent.emit({close: true});
  }
  save() {
    this.book['positions'] = this.positions
      .filter(el => this.bookSelectedPosition.indexOf(el.id) !== -1)
      .map(el => { return { id: el.id }; });
    this.closeEvent.emit({update: true, data: this.book });
  }
  create() {
    this.book['positions'] = this.positions
      .filter(el => this.bookSelectedPosition.indexOf(el.id) !== -1)
      .map(el => { return { id: el.id }; });
    this.closeEvent.emit({ create: true, data: this.book });
  }
}
