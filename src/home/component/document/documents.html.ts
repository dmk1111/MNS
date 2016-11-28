export const staffDocumetHtml = `
<md-card>
  <md-card-content>
    <h3>Documents</h3>
       <!--<div style="margin-bottom: 20px">-->
        <!--<datatable *ngIf="docs.length"-->
          <!--class="material"-->
          <!--[rows]="docs"-->
          <!--[columns]="column"-->
          <!--[columnMode]="'force'"-->
          <!--[headerHeight]="30"-->
          <!--[footerHeight]="50"-->
          <!--[rowHeight]="'auto'"-->
                   <!--[selected]="selected"-->
                   <!--[selectionType]="'cell'"-->
          <!--[limit]="10">-->
        <!--</datatable>-->
       <!--</div>-->
    <md-list>
         <md-list-item *ngFor="let doc of docs">
            <md-icon md-list-avatar>folder</md-icon>
            <h4 md-line>{{doc.name}}</h4>
            <p md-line class="demo-2"> {{doc.id}} </p>
         </md-list-item>
    </md-list>
  </md-card-content>
  <i class="material-icons">add_circle
    <input type="file" (change)="handle($event)" style="display: none">
  </i>
</md-card>
`;

