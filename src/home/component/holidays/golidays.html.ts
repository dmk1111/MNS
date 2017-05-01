//noinspection TsLint
export const holidaysHtml = `

<div class="row">
  <div class="col-xs-12 marginTop" *ngFor="let fom of form;let i = index">
    <md-card>
        <md-card-title *ngIf="!fom.id">
          <span (click)="del(fom)" title="Видалити"><md-icon class="delete-icon">highlight_off</md-icon></span>
        </md-card-title>
        <md-card-content>
          <div class="row">
            <div class="col-md-12">
              
               <md-input-container class="col-xs-12">
                <input mdInput type="text" (change)="onChange($event, 'typeHoliday', i)" [(ngModel)]="fom.typeHoliday" placeholder="Вид">
              </md-input-container>
              
              <md-input-container class="col-xs-12">
                <input mdInput type="text" (change)="onChange($event, 'holidayPlace', i)" [(ngModel)]="fom.year" placeholder="Рік">
              </md-input-container>
              
               <md-input-container class="col-xs-12">
                <input mdInput type="text" (change)="onChange($event, 'holidayPlace', i)" [(ngModel)]="fom.duration" placeholder="Тривалість">
              </md-input-container>
             
              <md-input-container class="col-xs-6">
                <input mdInput type="date" (change)="onChange($event, 'fromDate', i)" [(ngModel)]="fom.fromDate" placeholder="З">
              </md-input-container>
              
              <md-input-container class="col-xs-6">
                <input mdInput type="date" (change)="onChange($event, 'toDate', i)" [(ngModel)]="fom.toDate" placeholder="По">
              </md-input-container>
              
              <md-input-container class="col-xs-12">
                <input mdInput type="text" (change)="onChange($event, 'holidayPlace', i)" [(ngModel)]="fom.holidayPlace" placeholder="Місце">
              </md-input-container>
              
              <md-input-container class="col-xs-12">
               <input mdInput type="text" (change)="onChange($event, 'description', i)" [(ngModel)]="fom.description" placeholder="Коментар">
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
