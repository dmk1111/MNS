//noinspection TsLint
export const WorkExperienceHtml = `
<div class="row"
              [ngBusy]="{busy: load, message: 'Завантаження', backdrop: true}"
              style="z-index: 999999999"
             >
  <div class="col-md-12 col-xs-12 marginTop" *ngFor="let fom of form;let i = index">
    <md-card>
        <md-card-title>
          <span 
            (click)="del(fom);"
          ><md-icon class="delete-icon">highlight_off</md-icon></span>
        </md-card-title>
        <md-card-content>
              <div class="row">
                <div class="col-xs-4">
                
                    <div class="col-xs-6">
                       <md-input-container>
                                 <input mdInput type="date" style="width: 95%; float: left" (change)="onChange($event, 'fromDate', i)" [(ngModel)]="fom.fromDate" placeholder="з">
                        </md-input-container>
                    </div>  
                    
                    <div class="col-xs-6">
                        <md-input-container>
                                <input mdInput type="date" style="width: 95%; margin-right: 5%; display: block" (change)="onChange($event, 'toDate', i)" [(ngModel)]="fom.toDate" placeholder="по">
                         </md-input-container>
                    </div>  
                    
                </div>   
                 
                <div class="col-xs-8">
                     <!--<md-input-container>-->
                          <textarea  rows="5" cols="50"  style="width: 95%; float: right" (change)="onChange($event, 'orgName', i)" [(ngModel)]="fom.orgName" placeholder="Коментар" ></textarea>
                       <!--</md-input-container>-->
                </div>
              
              </div>
        </md-card-content>
    </md-card>
  </div>
  <div class="col-md-12 col-xs-12" style="margin-top: 10px">
  <div class="col-xs-12">
    <button md-raised-button color="primary" class="col-xs-12" (click)="addExp()">Додати</button>
  </div>
`
