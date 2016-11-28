//noinspection TsLint
export const staffEditHtml = `
    <div class="modal" style="display: block;overflow: auto">
    <div style="    
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    overflow: hidden;
    position: fixed;"></div>
    <div class="modal-content" style="width: 100%;z-index: 9999;height: 100%"> 
        <md-card style="background: aliceblue;padding-top: 20px">
        
      <md-card-header style="margin-bottom: 0px !important;">
        <ul class="nav nav-tabs">
            <li  [ngClass]="{active: tabIndex === 1}"><a (click)="tabIndex = 1">Base</a></li>
            <li [ngClass]="{active: tabIndex === 2}"><a (click)="tabIndex = 2">Education</a></li>
            <li [ngClass]="{active: tabIndex === 3}"><a (click)="tabIndex = 3">Other</a></li>
            <li [ngClass]="{active: tabIndex === 4}"><a (click)="tabIndex = 4">WorkExperience</a></li>
            <li [ngClass]="{active: tabIndex === 5}"><a (click)="tabIndex = 5">Benefits</a></li>
            <li [ngClass]="{active: tabIndex === 6}"><a (click)="tabIndex = 6">Holidays</a></li>
            <li [ngClass]="{active: tabIndex === 7}"><a (click)="tabIndex = 7">Fired</a></li>
            <li [ngClass]="{active: tabIndex === 8}"><a (click)="tabIndex = 8">Premium Fines</a></li>
            <li [ngClass]="{active: tabIndex === 9}"><a (click)="tabIndex = 9">Promotion</a></li>
        </ul> 
      </md-card-header>
      <md-card-content>
        <md-card style="background-color: cornsilk">
          <md-card-content>
            
            <!--Base Tab-->
            <base-staff *ngIf="tabIndex === 1" [data]="staff.mainStaff"></base-staff>
            <education-staff *ngIf="tabIndex === 2" [data]="staff.education"></education-staff>
             <other-staff *ngIf="tabIndex === 3" [data]="staff.other"></other-staff>
             <work-experience *ngIf="tabIndex === 4" [id]="staff.id" [data]="staff.workExperiences"></work-experience>
             <benefits *ngIf="tabIndex === 5" [id]="staff.id" [data]="staff.benefits"></benefits>
             <staff-holidays *ngIf="tabIndex === 6" [data]="staff.holidays"></staff-holidays>
             <staff-fired *ngIf="tabIndex === 7" [data]="staff.fired"></staff-fired>
             <staff-premium-fines *ngIf="tabIndex === 8" [data]="staff.premiumFines"></staff-premium-fines>
             <staff-promotion *ngIf="tabIndex === 9" [data]="staff.promotions"></staff-promotion>
          </md-card-content>  
          
           <md-card-actions align="end">
        <button md-raised-button color="primary" (click)="save()">save</button>
        <button md-raised-button color="accent" (click)="close()">close</button>
   </md-card-actions>
        </md-card>
      </md-card-content>
</md-card>
    </div>
</div>
`;
