import { Component, EventEmitter, Input, Output } from '@angular/core';
import { rankEditModalHtml } from './rankEditModal.html';
import { ToastsManager } from 'ng2-toastr';
import { PositionService } from '../../../../services/position.service';

@Component({
  selector: 'rank-modal',
  template: rankEditModalHtml
})
export class RankEditModal {
  @Input() rank: any;
  @Input() isCreate: boolean;
  @Output() onClose = new EventEmitter();
  constructor(private positionApi: PositionService, private toast: ToastsManager) {}

  ngOnInit() {
    if (!this.rank) {
      this.rank = {};
    }
  }
  save() {
    this.positionApi.saveRank(this.rank)
      .subscribe(res => {
        this.onClose.emit(true);
      });
  }
  create() {
    this.positionApi.createRank(this.rank)
      .subscribe(res => {
        this.onClose.emit(true);
      });
  }
  deletePosition() {
    if (confirm('Видалити?')) {
      this.positionApi.deleteRank(this.rank.id)
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
