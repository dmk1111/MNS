//noinspection TsLint
export const staffEditHtml = `
    <div class="modal" style="display: block">
      <div class="modal-content" style="width: 100%;z-index: 9999;height: 100%"> 
        <ul class="nav nav-tabs" style="width: 100%;background-color: #fff8dc;">
            <li  [ngClass]="{active: tabIndex === 1}"><a (click)="tabIndex = 1">Base</a></li>
            <li [ngClass]="{active: tabIndex === 2}"><a (click)="tabIndex = 2">Education</a></li>
            <li [ngClass]="{active: tabIndex === 3}"><a (click)="tabIndex = 3">Other</a></li>
            <li [ngClass]="{active: tabIndex === 4}"><a (click)="tabIndex = 4">WorkExperience</a></li>
            <li [ngClass]="{active: tabIndex === 5}"><a (click)="tabIndex = 5">Benefits</a></li>
            <li [ngClass]="{active: tabIndex === 6}"><a (click)="tabIndex = 6">Holidays</a></li>
            <li [ngClass]="{active: tabIndex === 7}"><a (click)="tabIndex = 7">Fired</a></li>
            <li [ngClass]="{active: tabIndex === 8}"><a (click)="tabIndex = 8">Premium Fines</a></li>
            <li [ngClass]="{active: tabIndex === 9}"><a (click)="tabIndex = 9">Promotion</a></li>
            <li [ngClass]="{active: tabIndex === 10}"><a (click)="tabIndex = 10">Documents</a></li>
        </ul> 
      <div style="background: aliceblue;padding-top: 20px;min-height: 100%;overflow: auto;min-height: 700px;height: 700px;">
        
      <!--<md-card-header style="margin-bottom: 0px !important;">-->
       
      <!--</md-card-header>-->
      <!--<md-card-content>-->
      <div class="row">
        <div class="col-md-9 col-xs-9">
           <md-card style="background-color: cornsilk">
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
              </md-card-content>  
              
               <md-card-actions align="end">
                  <button md-raised-button color="primary" (click)="save()">save</button>
                  <button md-raised-button color="accent" (click)="close()">close</button>
              </md-card-actions>
            </md-card>
        </div>
        
        <div class="col-md-3 col-xs-3" style="position: fixed;left: 74%">
          <md-card style="background-color: cornsilk;padding: 0 0 0 0;">
            <md-card-content>
               <img src="img/profile.jpg" style="width: 100%">
                <div>
                  <h4>Ivanov Ivan Ivanu4</h4>
                  <h5>Lviv, Zelena str. 21/8</h5>
                  <h5>89912</h5>
                  <h5 >+380666666666</h5>
                </div>
            </md-card-content>
          </md-card>
        </div>
      </div>
      </div>
    </div>
</div>
`;
