export const promotionsHtml = `

<div class="row">
  <div class="col-md-4 col-xs-6 col-lg-3 marginTop" *ngFor="let fom of form;let i = index">
    <md-card>
        <md-card-title *ngIf="!fom.id"><span (click)="del(fom)">X</span></md-card-title>
        <md-card-content>
          <div class="row">
            <div>
              <input mdInput type="text" style="width: 100%" (change)="onChange($event, 'companyName', i)" [(ngModel)]="fom.companyName" placeholder="companyName">
              <input mdInput type="date" style="width: 100%" (change)="onChange($event, 'fromDate', i)" [(ngModel)]="fom.fromDate" placeholder="fromDate">
              <input mdInput type="date" style="width: 100%" (change)="onChange($event, 'toDate', i)" [(ngModel)]="fom.toDate" placeholder="toDate">
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
