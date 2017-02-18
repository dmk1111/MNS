export const usersHtml = `
<div [ngBusy]="{busy: load, message: 'Завантаження'}" style="z-index: 9999999"></div>
<userEdit [user]="user" (onClose)="modalClose()" *ngIf="showEdit"></userEdit>
 
  <!--Table-->
     <h3>Користувачі</h3>
       <div style="margin-bottom: 20px;width: 95%">
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
          [selected]="user"
          [limit]="5">
        </datatable>
       </div>
`;
