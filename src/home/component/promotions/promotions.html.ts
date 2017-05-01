export const promotionsHtml = `

<div class="row">
  <div class="col-xs-12 marginTop" *ngFor="let fom of form;let i = index">
    <md-card>
        <md-card-title *ngIf="!fom.id">
          <span (click)="del(fom)" title="Видалити">
            <md-icon class="delete-icon">highlight_off</md-icon>
          </span>
        </md-card-title>
        <md-card-content>
          <div class="row">
            <div>
                                 <md-input-container>
 <input mdInput type="text" style="width: 100%" (change)="onChange($event, 'companyName', i)" [(ngModel)]="fom.companyName" placeholder="Назва компанії">
                                  </md-input-container>
                                 <md-input-container>
<input mdInput type="date" style="width: 100%" (change)="onChange($event, 'fromDate', i)" [(ngModel)]="fom.fromDate" placeholder="Дата з">
                                 </md-input-container>
                                  <md-input-container>
<input mdInput type="date" style="width: 100%" (change)="onChange($event, 'toDate', i)" [(ngModel)]="fom.toDate" placeholder="Дата по">
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
