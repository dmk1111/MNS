import { Component } from '@angular/core';
import { positionHtml } from './position.html';
import { PositionService } from '../../services/position.service';

// Component({
//   selector: 'position',
//   template: positionHtml
// })
// export class PositionComponent {
//   private positions = [];
//   private column = [];
//   private load;
//   private showEdit = false;
//   private position = null;
//   constructor(private positionApi: PositionService) {}
//
//   ngOnInit() {
//     this.column = [
//       {name: '#', prop: 'id'},
//       {name: 'Імя', prop: 'code'},
//       {name: 'Імя', prop: 'comment'},
//     ];
//     this.getPositions();
//   }
//   openCreate() {
//     this.position = null;
//     this.showEdit = true;
//   }
//   handleSelect(event) {
//     this.position = event.selected[0];
//     this.showEdit = true;
//   }
//   getPositions() {
//     this.load = this.positionApi.getPositions()
//       .subscribe(res => { this.positions = res; });
//   }
//   save(flag) {
//     if (flag) {
//       this.getPositions();
//     }
//     this.modalClose();
//   }
//   modalClose() {
//     this.position = null;
//     this.showEdit = false;
//   }
// }

@Component({
  selector: 'position',
  template: positionHtml
})

export class PositionComponent {
  private positions = [];
  private column = [];
  private load;
  private showEdit = false;
  private position = null;

  constructor(private positionApi: PositionService) {}
  ngOnInit() {
    this.column = [
      {name: '#', prop: 'id'},
      {name: 'Імя', prop: 'code'},
      {name: 'Імя', prop: 'comment'},
    ];
    this.getPositions();
  }
  openCreate() {
    this.position = null;
    this.showEdit = true;
  }
  handleSelect(event) {
    this.position = event.selected[0];
    this.showEdit = true;
  }
  getPositions() {
    this.load = this.positionApi.getPositions()
      .subscribe(res => { this.positions = res; });
  }
  save(flag) {
    if (flag) {
      this.getPositions();
    }
    this.modalClose();
  }
  modalClose() {
    this.position = null;
    this.showEdit = false;
  }
}

