//noinspection TsLint
export const positionHtml = `
<div [ngBusy]="{busy: load, message: 'Завантаження'}" style="z-index: 9999999"></div>
<position-modal [position]="position" [isCreate]="!!position" (onClose)="save($event)" *ngIf="showEdit"></position-modal>
 
  <!--Table-->
     <h3>Посади</h3>
       <div style="margin-bottom: 20px;width: 95%">
              <!--//create button-->
              <div style="text-align: right; margin-bottom: 5px" >
                <button md-mini-fab class="example-fab" (click)="openCreate()">
                 <md-icon>add</md-icon>
                </button>
              </div>

        <datatable *ngIf="positions && positions.length"
          class="material"
          [rows]="positions"
          [columns]="column"
          [columnMode]="'force'"
          [headerHeight]="30"
          [footerHeight]="50"
          [rowHeight]="'auto'"
          [selectionType]="'cell'"
          (select)="handleSelect($event)"
          [limit]="5">
        </datatable>
       </div>
`;
