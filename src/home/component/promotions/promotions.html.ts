export const promotionsHtml = `

<div class="row">
  <div class="col-md-3 col-xs-4 marginTop" *ngFor="let fom of form;let i = index">
    <md-card>
        <md-card-content>
          <div class="row">
            <div class="col-md-12">
              <md-input type="text" (change)="onChange($event, 'companyName', i)" [(ngModel)]="fom.companyName" placeholder="companyName"></md-input>
              <md-input type="date" (change)="onChange($event, 'fromDate', i)" [(ngModel)]="fom.fromDate" placeholder="fromDate"></md-input>
              <md-input type="date" (change)="onChange($event, 'toDate', i)" [(ngModel)]="fom.toDate" placeholder="toDate"></md-input>
            </div>
            <div class="col-md-12">
            </div>
          </div>
        </md-card-content>
    </md-card>
  </div>
  <div class="col-md-4 col-xs-6" style="margin-top: 10px">
  <md-card style="height: 309px" (click)="add()">
        <md-card-content>
          <div class="row">
            ADD
            <div class="col-md-12">
            </div>
          </div>
        </md-card-content>
    </md-card>
  </div>
</div>
`;
