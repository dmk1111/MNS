export const premiumFinesHtml = `

<div class="row">
  <div class="col-md-4 col-xs-6 marginTop" *ngFor="let fom of form;let i = index">
    <md-card>
        <md-card-title *ngIf="!fom.id" ><span (click)="del(fom)">X</span></md-card-title>
        <md-card-content>
          <div class="row">
            <div class="col-md-12">
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'name', i)" [(ngModel)]="fom.name" placeholder="name"></md-input>
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'order', i)" [(ngModel)]="fom.order" placeholder="order"></md-input>
              <md-input type="date" style="width: 100%" (change)="onChange($event, 'orderDate', i)" [(ngModel)]="fom.orderDate" placeholder="orderDate"></md-input>
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'serialNumber', i)" [(ngModel)]="fom.serialNumber" placeholder="serialNumber"></md-input>
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
