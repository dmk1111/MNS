//noinspection TsLint
export const staffEditHtml = `
    <div class="modal" style="display: block">
      <div class="modal-content" style="width: 100%;z-index: 9999;height: 100%"> 
      
        <!--Top Nav Bar-->
        <ul class="nav nav-tabs" style="width: 100%;background-color: aliceblue;">
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
            <li style="float: right;margin-top: 5px;margin-right: 5%;">
              <button md-raised-button color="primary" (click)="save()" style="line-height: 30px">save</button>
            </li>   
        </ul> 
        <!---->
        
        <!--Content-->
      <div style="background: aliceblue;padding-top: 20px;min-height: 100%;overflow: auto;min-height: 800px;height: 100%">
      <div class="row">
      
        <!--Left Comntent Card-->
        <div class="col-md-9 col-xs-9">
           <md-card style="background-color: cornsilk;min-height: 800px">
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
              
            </md-card>  
        </div>
        
        <!--Right Content Card (User Profile)-->
        <div class="col-md-3 col-xs-3" style="position: fixed;left: 74%;">
          <md-card style="min-height: 450px;background-color: cornsilk;padding: 0 0 0 0;">
            <md-card-content>
               <img [src]="this.avatar" style="width: 100%">
                <div>
                  <h4>Snoop Dog</h4>
                  <h5>Lviv, Zelena str. 21/8</h5>
                  <h5>89912</h5>
                  <h5 >+380666666666</h5>
                </div>
                <br>
                 <button md-raised-button color="primary" (click)="delete()">delete</button>
                 <button md-raised-button color="primary" (click)="close()">back to staff</button>
            </md-card-content>
          </md-card>
        </div>
      </div>
      </div>
    </div>
</div>
`;
