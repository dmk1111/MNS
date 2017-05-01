import { Component } from '@angular/core';
import { rankHtml } from './rank.html';
import { PositionService } from '../../services/position.service';

@Component({
  selector: 'rank',
  template: rankHtml
})
export class RankComponent {
  private column: Object[] = [];
  private ranks: any[] = [];
  private rank: Object;
  private load: any;
  private showEdit: boolean = false;
  constructor(private positionApi: PositionService) {}
  ngOnInit() {
    this.column = [
      {name: '#', prop: 'id'},
      {name: 'Код', prop: 'code'},
      {name: 'Назва', prop: 'comment'},
    ];
    this.getRanks();
  }
  getRanks() {
    this.load = this.positionApi.getRanks().subscribe(res => {this.ranks = res;})
  }
  openCreate() {
    this.rank = null;
    this.showEdit = true;
  }
  handleSelect(event) {
    this.rank = event.selected[0];
    this.showEdit = true;
  }

  save(flag) {
    if (flag) {
      this.getRanks();
    }
    this.modalClose();
  }
  modalClose() {
    this.rank = null;
    this.showEdit = false;
  }
}
