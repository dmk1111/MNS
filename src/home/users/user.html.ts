//noinspection TsLint
export const usersHtml = `
<div [ngBusy]="{busy: load, message: 'Завантаження'}" style="z-index: 9999999"></div>
<userEdit [user]="user" [regions]="regions" [isCreate]="!!user" (onClose)="save($event)" *ngIf="showEdit"></userEdit>
 
  <!--Table-->
     <h3>Користувачі</h3>
       <div style="margin-bottom: 20px;width: 95%">
              <!--//create button-->
              <div style="text-align: right; margin-bottom: 5px" >
                <button md-mini-fab class="example-fab" (click)="openCreate()">
                 <md-icon>add</md-icon>
                </button>
              </div>

        <datatable *ngIf="users && users.length"
          class="material"
          [rows]="users"
          [columnMode]="'force'"
          [headerHeight]="30"
          [footerHeight]="50"
          [rowHeight]="'auto'"
          [columns]="column"
          [selectionType]="'cell'"
          (select)="handleSelect($event)"
          [limit]="25">
        </datatable>
       </div>
`;
