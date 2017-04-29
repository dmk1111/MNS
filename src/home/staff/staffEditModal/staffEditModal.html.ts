//noinspection TsLint
export const staffEditHtml = `
    <div [ngBusy]="{busy: load, message: 'Завантаження', backdrop: true}" class="modal" style="display: block; z-index: 999999" >
      <div class="modal-content" style="width: 100%;z-index: 9999;height: 100%"> 
        <!--Top Nav Bar-->
        <ul class="nav nav-tabs vertical-menu" >
            <li><img src="http://www.dsns.gov.ua/src/8.png"/> </li>
            <li  [ngClass]="{active: tabIndex === 1}"><a (click)="tabIndex = 1">Основне</a></li>
            <li [ngClass]="{active: tabIndex === 2}"><a (click)="tabIndex = 2">Освіта</a></li>
            <li [ngClass]="{active: tabIndex === 4}"><a (click)="tabIndex = 4">Службова діяльність</a></li>
            <li [ngClass]="{active: tabIndex === 5}"><a (click)="tabIndex = 5">Пільги</a></li>
            <li [ngClass]="{active: tabIndex === 8}"><a (click)="tabIndex = 8">Стягнення заохочення</a></li>
            <li [ngClass]="{active: tabIndex === 6}"><a (click)="tabIndex = 6">Відпустки</a></li>
            <li [ngClass]="{active: tabIndex === 11}"><a (click)="tabIndex = 11">Лікарняні</a></li>
            <li [ngClass]="{active: tabIndex === 3}"><a (click)="tabIndex = 3">Інше</a></li>
            <li [ngClass]="{active: tabIndex === 7}"><a (click)="tabIndex = 7">Звільнення</a></li>
            <!--<li [ngClass]="{active: tabIndex === 9}"><a (click)="tabIndex = 9">Просування по службі</a></li>-->
            <li [ngClass]="{active: tabIndex === 10}"><a (click)="tabIndex = 10">Документи</a></li>
            <li class="save">
              <button md-raised-button color="primary" (click)="save()" style="line-height: 30px">Зберегти</button>
            </li>   
        </ul> 
        <!---->
        
        
        <!--Content-->
      <div class="content">
      <div class="row" style="min-height: 1700px">
      
        <!--Left Comntent Card-->
        <div class="col-md-9 col-xs-9">
           <md-card style="background-color:white; opacity: 0.8;min-height: 800px">
           
           <!--Card title-->
           <md-card-title>{{ title }}</md-card-title>
           
           <!--Card Content-->
            <md-card-content>
                
                <!--Base Tab-->
                <base-staff *ngIf="tabIndex === 1" [data]="staff.mainStaff"></base-staff>
                <education-staff *ngIf="tabIndex === 2" [id]="staff.id" [data]="staff.education"></education-staff>
                 <other-staff *ngIf="tabIndex === 3" [data]="staff.other"></other-staff>
                 <work-experience *ngIf="tabIndex === 4" [id]="staff.id" [data]="staff.workExperiences"></work-experience>
                 <benefits *ngIf="tabIndex === 5" [id]="staff.id" [data]="staff.benefits"></benefits>
                 <staff-holidays *ngIf="tabIndex === 6" [data]="staff.holidays"></staff-holidays>
                 <staff-fired *ngIf="tabIndex === 7" [data]="staff.fired"></staff-fired>
                 <staff-premium-fines *ngIf="tabIndex === 8" [data]="staff.premiumFines"></staff-premium-fines>
                 <staff-promotion *ngIf="tabIndex === 9" [data]="staff.promotions"></staff-promotion>
                 <staff-document *ngIf="tabIndex === 10" [id]="staff.id"></staff-document>
                 <hospitals *ngIf="tabIndex === 11" [id]="staff.id" [data]="staff.hospitals"></hospitals>
              </md-card-content>  
              
            </md-card>  
        </div>
        
        <!--Right Content Card (User Profile)-->
        <div class="col-md-3 col-xs-3 user">
          <md-card style="min-height: 450px; background-color:white; opacity: 0.8; padding: 10px;">
            <md-card-content>
              <h4 class="username">Іван Іванович Іванов</h4>
              <label for="image" style="width: 100%">
                <input type="file"  (change)="uploadPhoto($event)" name="image" id="image" style="display:none;"/>
                <img *ngIf="avatar" [src]="avatar" style="width: 60%" />
              </label>
                <div style="text-align: center;"> 
                  <h5 >+380666666666</h5>
                </div>
                <br>
                <div class="row">
                  <div class="col-xs-12" style="text-align: center; margin-bottom: 5px">               
                    <button md-raised-button color="primary" (click)="close()">Назад до списку</button>
                  </div>
                   <div class="col-xs-12" style="text-align: center;margin-bottom: 5px">               
                    <button md-raised-button color="warn" (click)="delete()">Видалити персону</button>
                  </div>
                </div>
            </md-card-content>
          </md-card>
        </div>
      </div>
      </div>
    </div>
</div>
`;
