export const deeletedStaffHtml = `
 <h3>Deleted Staff</h3>
   <div style="margin-bottom: 20px">
    <datatable *ngIf="staff && staff.length"
      class="material"
      [rows]="staff"
      [columns]="column"
      [columnMode]="'force'"
      [headerHeight]="30"
      [footerHeight]="50"
      [rowHeight]="'auto'"
      [limit]="10">
    </datatable>
   </div>
`;