import { Component } from '@angular/core';
import { rankHtml } from './rank.html';
import { PositionService } from '../../services/position.service';

const DATA = [
  {id: 1, code: 'lalalal', comment: 'laalalallala'},
  {id: 1, code: 'lalalal', comment: 'laalalallala'},
  {id: 1, code: 'lalalal', comment: 'laalalallala'},
  {id: 1, code: 'lalalal', comment: 'laalalallala'},
  {id: 1, code: 'lalalal', comment: 'laalalallala'},
  {id: 1, code: 'lalalal', comment: 'laalalallala'},
  {id: 1, code: 'lalalal', comment: 'laalalallala'},
  {id: 1, code: 'lalalal', comment: 'laalalallala'},
  {id: 1, code: 'lalalal', comment: 'laalalallala'},
  {id: 1, code: 'lalalal', comment: 'laalalallala'},
  {id: 1, code: 'lalalal', comment: 'laalalallala'},
  {id: 1, code: 'lalalal', comment: 'laalalallala'},
  {id: 1, code: 'lalalal', comment: 'laalalallala'}
];

@Component({
  selector: 'rank',
  template: rankHtml
})
export class RankComponent {
  private column: Object[] = [];
  private ranks: any[] = [];
  private rank: Object;
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
    this.ranks = DATA;
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
