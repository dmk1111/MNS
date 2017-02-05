//noinspection TsLint
export const BenefitsHtml = `

<div class="row">
  <div class="col-md-4 col-xs-6 marginTop" *ngFor="let fom of form;let i = index">
    <md-card>
        <md-card-title>
          <span (click)="del(fom)">X</span>
        </md-card-title>
        <md-card-content>
          <div class="row">
            <div class="col-md-12">
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'name', i)" [(ngModel)]="fom.name" placeholder="Назва пільги"></md-input>
              <md-input type="date" style="width: 100%" (change)="onChange($event, 'fromDate', i)" [(ngModel)]="fom.fromDate" placeholder="Дата початку"></md-input>
              <md-input type="date" style="width: 100%" (change)="onChange($event, 'toDate', i)" [(ngModel)]="fom.toDate" placeholder="Дата закінчення"></md-input>
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'order', i)" [(ngModel)]="fom.order" placeholder="Наказ"></md-input>
              <md-input type="date" style="width: 100%" (change)="onChange($event, 'orderDate', i)" [(ngModel)]="fom.orderDate" placeholder="Дата замовлення"></md-input>
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'certification', i)" [(ngModel)]="fom.certification" placeholder="Сертифікація"></md-input>
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'privilege', i)" [(ngModel)]="fom.privilege" placeholder="Привілегії"></md-input>
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'actsAndComments', i)" [(ngModel)]="fom.actsAndComments" placeholder="Акти і коментарії"></md-input>
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'otherInfo', i)" [(ngModel)]="fom.otherInfo" placeholder="Інше"></md-input>
            </div>
            <div class="col-md-12">
            </div>
          </div>
        </md-card-content>
    </md-card>
  </div>
  <div class="col-md-4 col-xs-6" style="margin-top: 10px">
  <md-card style="height: 309px" (click)="addBenefits()">
        <md-card-content>
          <div class="row">
            ДОДАТИ
            <div class="col-md-12">
            </div>
          </div>
        </md-card-content>
    </md-card>
  </div>
</div>
  `
