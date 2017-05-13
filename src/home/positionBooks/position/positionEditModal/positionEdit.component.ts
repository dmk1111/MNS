import { Component, EventEmitter, Output, Input } from '@angular/core';
import { positionModalHtml } from './positionEdit,html';
import { ToastsManager } from 'ng2-toastr';
import { PositionService } from '../../../../services/position.service';
@Component({
  selector: 'position-modal',
  template: positionModalHtml,
  styles: [require('./positionModal.css')]
})
export class PositionModal {
  @Input() position: any;
  @Input() isCreate: boolean;
  @Output() onClose = new EventEmitter();
  constructor(private positionApi: PositionService, private toast: ToastsManager) {}
  ngOnInit() {
    if (!this.position) {
      this.position = {};
    }
  }
  save() {
    this.positionApi.savePosition(this.position)
      .subscribe(res => {
        this.onClose.emit(true);
    });
  }
  create() {
    this.positionApi.createPosition(this.position)
      .subscribe(res => {
        this.onClose.emit(true);
      });
  }
  deletePosition() {
    if (confirm('Видалити?')) {
      this.positionApi.deletePosition(this.position.id)
        .subscribe(res => {
          this.toast.success('Успішно видалено');
          this.onClose.emit(true);
        });
    }
  }
  close() {
    this.onClose.emit(false);
  }
}
