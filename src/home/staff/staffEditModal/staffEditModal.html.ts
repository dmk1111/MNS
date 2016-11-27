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
        <md-card style="background: white;padding-top: 20px">
        
      <md-card-header>
        <ul class="nav nav-tabs">
            <li  [ngClass]="{active: tabIndex === 1}"><a (click)="tabIndex = 1">Base</a></li>
            <li [ngClass]="{active: tabIndex === 2}"><a (click)="tabIndex = 2">Education</a></li>
            <li [ngClass]="{active: tabIndex === 3}"><a (click)="tabIndex = 3">Other</a></li>
            <li [ngClass]="{active: tabIndex === 4}"><a (click)="tabIndex = 4">WorkExperience</a></li>
            <li [ngClass]="{active: tabIndex === 5}"><a (click)="tabIndex = 5">Benefits</a></li>
        </ul> 
      </md-card-header>
      <md-card-content>
        <md-card>
          <md-card-content>
            
            <!--Base Tab-->
            <base-staff *ngIf="tabIndex === 1" [data]="staff.mainStaff"></base-staff>
            <education-staff *ngIf="tabIndex === 2" [data]="staff.education"></education-staff>
             <other-staff *ngIf="tabIndex === 3" [data]="staff.other"></other-staff>
             <work-experience *ngIf="tabIndex === 4" [data]="staff.workExperiences"></work-experience>
             <benefits *ngIf="tabIndex === 5" [data]="staff.benefits"></benefits>
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
