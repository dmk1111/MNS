//noinspection TsLint
export const staffListHtml = `
  <div style="position: relative;" [ngBusy]="{busy: load, message: 'Завантаження'}"></div>
  <create-staff [regions]="regions" (onClose)="modalClose($event)" *ngIf="showCreate"></create-staff>
  
  <div class="staff_wrapper">
    <div class="top">
      <img class="logo" src="../../../img/logo.png">
      <h3>Персонал</h3>
    </div>
    <button class="button-gradient" (click)="goTo('menu')">Назад</button>
    <div class="add_material">
                    <button md-fab class="example-fab" (click)="openCreate()">
                     <md-icon>add</md-icon>
                    </button>
     </div>
     <div class="inner-table" >
       
      <datatable  *ngIf="staff && staff.length"
        class="material"
        [rows]="staff"
        [columns]="column"
        [columnMode]="'force'"
        [headerHeight]="30"
        [footerHeight]="50"
        [rowHeight]="'auto'"
                 [selected]="selected"
                 [selectionType]="'cell'"
                 (select)="onSelect($event)"
        [limit]="10">
      </datatable>
     </div>
   </div>
    <staffModal  *ngIf="open" (onClose)="closeHandle($event)"></staffModal>
    
`;
