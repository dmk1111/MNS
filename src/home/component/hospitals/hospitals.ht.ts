//noinspection TsLint
export const hospitalView = `
  <div class="row">
<div class="col-md-4 col-xs-6 marginTop" *ngFor="let fom of form;let i = index">
<md-card>
<md-card-title *ngIf="!fom.id"><span (click)="del(fom)">X</span></md-card-title>
<md-card-content>
<div class="row">
<div class="col-md-12">
      
        
        <md-input-container>
         <input mdInput type="text" style="width: 100%" (change)="onChange($event, 'typeHoliday', i)" [(ngModel)]="fom.typeHospital" placeholder="Лікування, тривалість">
        </md-input-container>
        
        <md-input-container>
        <input mdInput type="text" style="width: 100%" (change)="onChange($event, 'fromDate', i)" [(ngModel)]="fom.year" placeholder="Рік">
        </md-input-container>
        
        <md-input-container>
        <input mdInput type="number" style="width: 100%" (change)="onChange($event, 'fromDate', i)" [(ngModel)]="fom.duration" placeholder="Тривалість">
        </md-input-container>
        
        <md-input-container>
        <input mdInput type="date" style="width: 100%" (change)="onChange($event, 'fromDate', i)" [(ngModel)]="fom.fromDate" placeholder="Дати З">
        </md-input-container>
        
        <md-input-container>
        <input mdInput type="date" style="width: 100%" (change)="onChange($event, 'toDate', i)" [(ngModel)]="fom.toDate" placeholder="Дата До">
      </md-input-container>
      
        <md-input-container>
        <input mdInput type="text" style="width: 100%" (change)="onChange($event, 'description', i)" [(ngModel)]="fom.description" placeholder="Підстава">
        </md-input-container>
      
      
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
  Додати
  <div class="col-md-12">
  </div>
  </div>
  </md-card-content>
  </md-card>
  </div>
  </div>
`;
