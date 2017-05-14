import { Component } from '@angular/core';
import { NominalBookService } from '../../../services/nomimnalBook.service';
import { ToastsManager } from 'ng2-toastr';
import { UserApiService } from '../../../services/user.service';
import { PositionService } from '../../../services/position.service';
import { Router } from '@angular/router';
@Component({
  selector: 'nominal-book',
  template: require('./nominalBook.html'),
  styles: [require('./nominalBook.css')]
})
export class NominalJobBook {
  private selectedParent: Parent;
  private selectedChild: Child;
  private selectedParentId: number;
  private selectedChildId: number;
  private childs: Array<Child> = [];
  private parentsArray: any;
  private regions;
  private positions;
  private filteredPosition;
  private showParentModal: boolean = false;
  private showChildModal: boolean = false;
  constructor(private bookService: NominalBookService,
              private regionServcie: UserApiService,
              private positionService: PositionService,
              private router: Router,
              private toaster: ToastsManager) {}
  ngOnInit() {
    this.regionServcie.getRegions()
      .subscribe(res => { this.regions = res; });
    this.positionService.getPositions()
      .subscribe(res => { this.positions = res; });
    this.getParents();
  }
  removeParent(parent) {
    if (confirm('Видалити ' + parent.name)) {
      this.bookService.deleteParent(parent.id)
        .subscribe(res => {
          this.toaster.success('Успішно видалено');
          this.parentsArray = this.parentsArray.filter(el => el.id !== parent.id);
        }, error => {
          this.toaster.error('Помилка видмлення!');
        });
    }
  }
  goToShatat() {
    this.router.navigate(['home/shtat', this.selectedParentId]);
  }
  filterFreePosition() {
    let positionInBook = [];
    this.parentsArray.forEach(parent => {
      if (parent.nominallyJobBooks.length) {
        parent.nominallyJobBooks.forEach(child => {
          child.positions.forEach(pos => {
            positionInBook.push(pos.id);
          });
        });
      }
    });
    this.filteredPosition = this.positions.filter(pos => positionInBook.indexOf(pos.id) === -1);
  }
  getParents() {
    this.bookService.getParents()
      .subscribe(res => {
        this.parentsArray = res;
        this.filterFreePosition();
        if (this.selectedParentId) {
          this.childs = this.parentsArray
            .find(el => el.id === this.selectedParentId).nominallyJobBooks;
        }
      });
  }
  selectParent(parent: Parent) {
    this.childs = parent.nominallyJobBooks;
    this.selectedParentId = parent.id;
  }
  selectChild(child: Child) {
    this.selectedChildId = child.id;
  }
  removeChild(child) {
    if (confirm('Видалити ' + child.name)) {
      this.bookService.deleteChild(child.id)
        .subscribe(res => {
          this.toaster.success('Успішно видалено');
          this.childs = this.childs.filter(el => el.id !== child.id);
        }, error => {
          this.toaster.error('Помилка видмлення!');
        });
    }
  }
  createChild(child) {
    let body = Object.assign({}, child, { region: { id: child.region }});
    this.bookService.createChild(this.selectedParentId, body)
      .subscribe(res => {
        this.showChildModal = false;
        this.toaster.success('успішно створено');
        this.getParents();
      }, error => {
        this.toaster.error('Помилка створення')
      });
  }
  updateChild(child) {
    let body = Object.assign({}, child, { region: { id: child.region }});
    this.bookService.updateChild(this.selectedChildId, body)
      .subscribe(res => {
        this.showChildModal = false;
        this.toaster.success('успішно збережено');
        this.getParents();
      }, error => {
        this.toaster.error('Помилка збереження');
      });
  }
  createParent(parent) {
    this.bookService.createParent(parent)
      .subscribe(res => {
        this.showParentModal = false;
        this.toaster.success('успішно створено');
        this.getParents();
      });
  }
  updateParent(parent) {
    this.bookService.updateParent(parent.id, parent)
      .subscribe(res => {
        this.showParentModal = false;
        this.toaster.success('успішно збережено');
        this.getParents();
      });
  }
  openCreateParentModal() {
    this.showParentModal = true;
  }
  openEditParentModal(parent) {
    this.selectedParent = parent;
    this.showParentModal = true;
  }
  openCreateChildModal() {
    this.showChildModal = true;
  }
  openEditChildModal(child) {
    this.showChildModal = true;
    this.selectedChild = child;
  }
  handleParentModalClose(event) {
    this.selectedParent = undefined;
    if (event.close) {
      this.showParentModal = false;
    }
    if (event.create) {
      this.createParent(event.data);
    }
    if (event.update) {
      this.updateParent(event.data);
    }
  }
  handleChildModal(event) {
    this.selectedChild = undefined;
    if (event.close) {
      this.showChildModal = false;
    }
    if (event.create) {
      this.createChild(event.data);
    }
    if (event.update) {
      this.updateChild(event.data);
    }
  }
}

export interface Parent {
  address: string;
  name: string;
  id: number;
  location: string;
  startAction: string;
  stateNumber: number;
  nominallyJobBooks: Array<Child>;
}

export interface Child {
  code?: string;
  id?: number;
  name?: string;
  positions?: Array<any>;
  region?: Object;
}

