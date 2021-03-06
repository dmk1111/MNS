//noinspection TsLint
export const staffListHtml = `
  <div style="position: relative;" [ngBusy]="{busy: load, message: 'Завантаження'}"></div>
  <create-staff [regions]="regions" (onClose)="modalClose($event)" *ngIf="showCreate"></create-staff>
  
  <h3 >Персонал</h3>
   <div style="margin-bottom: 20px" >
     <div style="text-align: right; margin-bottom: 5px" >
                  <button md-mini-fab class="example-fab" (click)="openCreate()">
                   <md-icon>add</md-icon>
                  </button>
      </div>
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
    <staffModal  *ngIf="open" (onClose)="closeHandle($event)"></staffModal>
    
`;
