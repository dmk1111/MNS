//noinspection TsLint
export const staffListHtml = `
  <h3>Staff</h3>
   <div style="margin-bottom: 20px">
    <datatable *ngIf="staff && staff.length"
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
    <staffModal *ngIf="open" (onClose)="closeHandle($event)"></staffModal>
`;
