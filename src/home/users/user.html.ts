export const usersHtml = `
<div [ngBusy]="{busy: load, message: 'Завантаження'}" style="z-index: 9999999"></div>
 
  <!--Table-->
     <h3>Видалений Персонал</h3>
       <div style="margin-bottom: 20px">
        <datatable *ngIf="users && users.length"
          class="material"
          [rows]="users"
          [columns]="column"
          [columnMode]="standart"
          [headerHeight]="30"
          [footerHeight]="50"
          [rowHeight]="'auto'"
          [limit]="10">
        </datatable>
       </div>
`;
