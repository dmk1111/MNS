export const BenefitsHtml = `

<div class="row">
  <div class="col-md-4 col-xs-6" *ngFor="let fom of form;let i = index">
    <md-card>
        <md-card-content>
          <div class="row">
            <div class="col-md-12">
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'name', i)" [(ngModel)]="fom.name" placeholder="name"></md-input>
              <md-input type="date" style="width: 100%" (change)="onChange($event, 'fromDate', i)" [(ngModel)]="fom.fromDate" placeholder="fromDate"></md-input>
              <md-input type="date" style="width: 100%" (change)="onChange($event, 'toDate', i)" [(ngModel)]="fom.toDate" placeholder="toDate"></md-input>
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'order', i)" [(ngModel)]="fom.order" placeholder="order"></md-input>
              <md-input type="date" style="width: 100%" (change)="onChange($event, 'orderDate', i)" [(ngModel)]="fom.orderDate" placeholder="orderDate"></md-input>
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'certification', i)" [(ngModel)]="fom.certification" placeholder="certification"></md-input>
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'privilege', i)" [(ngModel)]="fom.privilege" placeholder="privilege"></md-input>
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'actsAndComments', i)" [(ngModel)]="fom.actsAndComments" placeholder="actsAndComments"></md-input>
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'otherInfo', i)" [(ngModel)]="fom.otherInfo" placeholder="otherInfo"></md-input>
            </div>
            <div class="col-md-12">
            </div>
          </div>
        </md-card-content>
    </md-card>
  </div>
  <div class="col-md-4 col-xs-6" style="margin-top: 10px">
  <md-card style="height: 309px">
        <md-card-content>
          <div class="row">
            ADd
            <div class="col-md-12">
            </div>
          </div>
        </md-card-content>
    </md-card>
  </div>
</div>
  `
