//noinspection TsLint
export const premiumFinesHtml = `

 <ul class="nav nav-tabs" style="width: 100%">
            <li  [ngClass]="{active: tabIndex === 1}"><a (click)="sort(1)">Стягнення</a></li>
            <li [ngClass]="{active: tabIndex === 2}"><a (click)="sort(2)">Заохочення</a></li>
    </ul> 
<div class="row">
  
 
  
  <div class="col-md-4 col-xs-6 marginTop" *ngFor="let fom of form;let i = index">
    <md-card>
        <md-card-title *ngIf="!fom.id" ><span (click)="del(fom)">X</span></md-card-title>
        <md-card-content>
          <div class="row">
            <div class="col-md-12">
                         
                         <md-input-container>
                            <input mdInput type="text" style="width: 100%" (change)="onChange($event, 'name', i)" [(ngModel)]="fom.name" placeholder="Назва">
                          </md-input-container>
                          
                          <md-input-container>
                             <input mdInput type="text" style="width: 100%" (change)="onChange($event, 'order', i)" [(ngModel)]="fom.order" placeholder="Хто відав наказ">
                          </md-input-container>
 
                           <md-input-container>
                             <input mdInput type="date" style="width: 100%" (change)="onChange($event, 'orderDate', i)" [(ngModel)]="fom.orderDate" placeholder="Дата наказу">
                          </md-input-container>
 
                         <md-input-container>
                           <input mdInput type="text" style="width: 100%" (change)="onChange($event, 'serialNumber', i)" [(ngModel)]="fom.serialNumber" placeholder="Номер наказу">
                         </md-input-container>
                         
                          <md-input-container>
                           <textarea mdTextareaAutosize mdInput maxRows="5" type="text" style="width: 100%" (change)="onChange($event, 'comment', i)" [(ngModel)]="fom.comment" placeholder="Коментарій"></textarea>
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
