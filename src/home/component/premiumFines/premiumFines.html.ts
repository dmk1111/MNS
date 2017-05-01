//noinspection TsLint
export const premiumFinesHtml = `

 <ul class="nav nav-tabs">
            <li  [ngClass]="{active: tabIndex === 1}"><a (click)="sort(1)">Стягнення</a></li>
            <li [ngClass]="{active: tabIndex === 2}"><a (click)="sort(2)">Заохочення</a></li>
    </ul> 
<div class="row">
  
 
  
  <div class="col-xs-12 marginTop" *ngFor="let fom of form;let i = index">
    <md-card>
        <md-card-title *ngIf="!fom.id" >
          <span (click)="del(fom)" title="Видалити"><md-icon class="delete-icon">highlight_off</md-icon></span>
        </md-card-title>
        <md-card-content>
          <div class="row">
            <div class="col-md-12">
                         
                         <md-input-container class="col-xs-12">
                            <input mdInput type="text" (change)="onChange($event, 'name', i)" [(ngModel)]="fom.name" placeholder="Назва">
                          </md-input-container>
                          
                          <md-input-container class="col-xs-12">
                             <input mdInput type="text" (change)="onChange($event, 'order', i)" [(ngModel)]="fom.order" placeholder="Хто відав наказ">
                          </md-input-container>
 
                           <md-input-container class="col-xs-12">
                             <input mdInput type="date" (change)="onChange($event, 'orderDate', i)" [(ngModel)]="fom.orderDate" placeholder="Дата наказу">
                          </md-input-container>
 
                         <md-input-container class="col-xs-12">
                           <input mdInput type="text" (change)="onChange($event, 'serialNumber', i)" [(ngModel)]="fom.serialNumber" placeholder="Номер наказу">
                         </md-input-container>
                         
                          <md-input-container class="col-xs-12">
                           <textarea mdTextareaAutosize mdInput maxRows="5" type="text" (change)="onChange($event, 'comment', i)" [(ngModel)]="fom.comment" placeholder="Коментар"></textarea>
                         </md-input-container>
             </div>
             
            <div class="col-md-12">
            </div>
          </div>
        </md-card-content>
    </md-card>
  </div>
  
  <div class="col-xs-12">
    <button md-raised-button color="primary" class="col-xs-12" (click)="add()">Додати</button>
  </div>
</div>
`;
