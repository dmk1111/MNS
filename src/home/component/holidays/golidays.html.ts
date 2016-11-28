export const holidaysHtml = `

<div class="row">
  <div class="col-md-4 col-xs-6 marginTop" *ngFor="let fom of form;let i = index">
    <md-card>
        <md-card-title *ngIf="!fom.id"><span (click)="del(fom)">X</span></md-card-title>
        <md-card-content>
          <div class="row">
            <div class="col-md-12">
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'description', i)" [(ngModel)]="fom.description" placeholder="description"></md-input>
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'holidayPlace', i)" [(ngModel)]="fom.holidayPlace" placeholder="holidayPlace"></md-input>
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'typeHoliday', i)" [(ngModel)]="fom.typeHoliday" placeholder="typeHoliday"></md-input>
              <md-input type="date" style="width: 100%" (change)="onChange($event, 'fromDate', i)" [(ngModel)]="fom.fromDate" placeholder="fromDate"></md-input>
              <md-input type="date" style="width: 100%" (change)="onChange($event, 'toDate', i)" [(ngModel)]="fom.toDate" placeholder="toDate"></md-input>
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
            ADd
            <div class="col-md-12">
            </div>
          </div>
        </md-card-content>
    </md-card>
  </div>
</div>
`;
