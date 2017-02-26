export const premiumFinesHtml = `

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
 <input mdInput type="text" style="width: 100%" (change)="onChange($event, 'order', i)" [(ngModel)]="fom.order" placeholder="Наказ">
                                          </md-input-container>
 <md-input-container>
   <input mdInput type="date" style="width: 100%" (change)="onChange($event, 'orderDate', i)" [(ngModel)]="fom.orderDate" placeholder="orderDate">
                                      </md-input-container>
   <md-input-container>
     <input mdInput type="text" style="width: 100%" (change)="onChange($event, 'serialNumber', i)" [(ngModel)]="fom.serialNumber" placeholder="serialNumber">
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
            ADD
            <div class="col-md-12">
            </div>
          </div>
        </md-card-content>
    </md-card>
  </div>
</div>
`;
