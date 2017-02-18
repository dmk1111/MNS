export const holidaysHtml = `

<div class="row">
  <div class="col-md-4 col-xs-6 marginTop" *ngFor="let fom of form;let i = index">
    <md-card>
        <md-card-title *ngIf="!fom.id"><span (click)="del(fom)">X</span></md-card-title>
        <md-card-content>
          <div class="row">
            <div class="col-md-12">
              <input mdInput type="text" style="width: 100%" (change)="onChange($event, 'description', i)" [(ngModel)]="fom.description" placeholder="Опис">
              <input mdInput type="text" style="width: 100%" (change)="onChange($event, 'holidayPlace', i)" [(ngModel)]="fom.holidayPlace" placeholder="Місце">
              <input mdInput type="text" style="width: 100%" (change)="onChange($event, 'typeHoliday', i)" [(ngModel)]="fom.typeHoliday" placeholder="Тип">
              <input mdInput type="date" style="width: 100%" (change)="onChange($event, 'fromDate', i)" [(ngModel)]="fom.fromDate" placeholder="Дати З">
              <input mdInput type="date" style="width: 100%" (change)="onChange($event, 'toDate', i)" [(ngModel)]="fom.toDate" placeholder="Дата До">
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
