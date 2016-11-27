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
    <div class="modal-content" style="width: 80%;z-index: 9999;left: 10%;bottom: -77px;"> 
        <md-card style="background: white;padding-top: 20px">
        
      <md-card-header>
        <ul class="nav nav-tabs">
            <li  [ngClass]="{active: tabIndex === 1}"><a (click)="tabIndex = 1">Base</a></li>
            <li [ngClass]="{active: tabIndex === 2}"><a (click)="tabIndex = 2">Education</a></li>
            <li [ngClass]="{active: tabIndex === 3}"><a (click)="tabIndex = 3">Other</a></li>
        </ul> 
        <span (click)="close()" style="float: right;">X</span>
      </md-card-header>
      <md-card-content>
      <md-card>
        <md-card-content>
          
          <!--Base Tab-->
          <base-staff *ngIf="tabIndex === 1" [data]="staff.mainStaff"></base-staff>
          <education-staff *ngIf="tabIndex === 2" [data]="staff.education"></education-staff>
        </md-card-content>  
      </md-card>
      </md-card-content>
</md-card>
    </div>
</div>
`;
