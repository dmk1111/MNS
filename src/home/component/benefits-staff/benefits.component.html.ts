//noinspection TsLint
export const BenefitsHtml = `

<div class="row">
  <div class="col-xs-12 marginTop" *ngFor="let fom of form;let i = index">
    <md-card>
        <md-card-title>
          <span (click)="del(fom)"><md-icon class="delete-icon">highlight_off</md-icon></span>
        </md-card-title>
        <md-card-content>
          <div class="row">
            <div class="col-md-12">
            
              <md-input-container class="col-md-12">
                <input mdInput type="text" (change)="onChange($event, 'name', i)" [(ngModel)]="fom.name" placeholder="Назва пільги">
              </md-input-container>
              
              <md-input-container class="col-md-6">
                <input mdInput type="date" (change)="onChange($event, 'fromDate', i)" [(ngModel)]="fom.fromDate" placeholder="Дата початку">
               </md-input-container>

              
              <md-input-container class="col-md-6">
                <input mdInput type="date" (change)="onChange($event, 'toDate', i)" [(ngModel)]="fom.toDate" placeholder="Дата закінчення">
              </md-input-container>
              
              <md-input-container class="col-md-12">
                <input mdInput type="text" (change)="onChange($event, 'orderPerson', i)" [(ngModel)]="fom.orderPerson" placeholder="Хто віддав наказ">
              </md-input-container>
              
              <md-input-container class="col-md-12">
                <input mdInput type="date" (change)="onChange($event, 'orderDate', i)" [(ngModel)]="fom.orderDate" placeholder="Дата наказу">
              </md-input-container>
              
              <md-input-container class="col-md-12">
                <input mdInput type="text" (change)="onChange($event, 'orderNumber', i)" [(ngModel)]="fom.orderNumber" placeholder="Номер наказу">
              </md-input-container>
              
              <md-input-container class="col-md-12"> 
                  <input mdInput type="text" (change)="onChange($event, 'certification', i)" [(ngModel)]="fom.certification" placeholder="Посвідчення серія номер">
              </md-input-container>
              
              <div>
                   <div class="col-xs-12" style="text-align: center;margin-bottom: 4px" >Пільгова вислуга</div>
                   
                   
                  <div class="col-xs-4" >
                      
                  </div>
                  
                  <div class="col-xs-4">
                      <md-input-container>
                        <input mdInput type="number" min="0" (change)="onChange($event, 'benefitWorksYears', i)" [(ngModel)]="fom.benefitWorksYears" placeholder="РР">
                      </md-input-container>
                      <md-input-container>
                        <input mdInput type="number" min="0" max="12" (change)="onChange($event, 'benefitWorksMonths', i)" [(ngModel)]="fom.benefitWorksMonths" placeholder="ММ">
                      </md-input-container>
                      <md-input-container>
                        <input mdInput type="number" min="0" max="31" (change)="onChange($event, 'benefitWorksDays', i)" [(ngModel)]="fom.benefitWorksDays" placeholder="ДД">
                      </md-input-container>
                  </div>
                  
                  <div class="col-xs-4">
                  </div>
              </div>
              <!--<md-input-container>-->
                <!--<input mdInput type="date" (change)="onChange($event, 'orderDate', i)" [(ngModel)]="fom.orderDate" placeholder="Дата замовлення">-->
              <!--</md-input-container>-->
              <!---->
              <!--<md-input-container>-->
                <!--<input mdInput type="text" (change)="onChange($event, 'certification', i)" [(ngModel)]="fom.certification" placeholder="Сертифікація">-->
              <!--</md-input-container>-->
              <!---->
              <!--<md-input-container>-->
                <!--<input mdInput type="text" (change)="onChange($event, 'privilege', i)" [(ngModel)]="fom.privilege" placeholder="Привілегії">-->
              <!--</md-input-container>-->
              <!---->
              <!--<md-input-container>-->
                <!--<input mdInput type="text" (change)="onChange($event, 'actsAndComments', i)" [(ngModel)]="fom.actsAndComments" placeholder="Акти і коментарії">-->
              <!--</md-input-container>-->
              <!---->
              <!--<md-input-container>-->
                <!--<input mdInput type="text" (change)="onChange($event, 'otherInfo', i)" [(ngModel)]="fom.otherInfo" placeholder="Інше">-->
              <!--</md-input-container>-->
              
            </div>
            <div class="col-md-12">
            </div>
          </div>
        </md-card-content>
    </md-card>
  </div>
  <div class="col-xs-12">
    <button md-raised-button color="primary" class="col-xs-12" (click)="addBenefits()">Додати</button>
  </div>
</div>
  `
