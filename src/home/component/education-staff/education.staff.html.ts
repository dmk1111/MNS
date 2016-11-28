//noinspection TsLint
export const educationStaffHtml = `
<div class="row">
  <div class="col-md-4 col-xs-6 marginTop" *ngFor="let fom of form;let i = index">
    <md-card>
        <md-card-content>
          <div class="row">
            <div class="col-md-12">
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'educationalLevel', i)" [(ngModel)]="fom.educationalLevel" placeholder="educationalLevel"></md-input>
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'school', i)" [(ngModel)]="fom.school" placeholder="school"></md-input>
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'educationQualificationLevel', i)" [(ngModel)]="fom.educationQualificationLevel" placeholder="educationQualificationLevel"></md-input>
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'specialty', i)" [(ngModel)]="fom.specialty" placeholder="specialty"></md-input>
              <md-input type="text" style="width: 100%" (change)="onChange($event, 'seriesAndNumberOfDiploma', i)" [(ngModel)]="fom.seriesAndNumberOfDiploma" placeholder="seriesAndNumberOfDiploma"></md-input>
            </div>
            <div class="col-md-12">
            </div>
          </div>
        </md-card-content>
    </md-card>
  </div>
  <div class="col-md-4 col-xs-6" style="margin-top: 10px">
  <md-card (click)="addEdu()" style="height: 309px">
        <md-card-content>
          <div class="row">
            <span>Add</span>
            <div class="col-md-12">
            </div>
          </div>
        </md-card-content>
    </md-card>
  </div>
</div>
`;
