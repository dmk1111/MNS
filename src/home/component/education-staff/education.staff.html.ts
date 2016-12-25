//noinspection TsLint
export const educationStaffHtml = `
<div class="row" [ngBusy]="{busy: load, message: 'Завантаження', backdrop: true}" style="z-index: 99999999">
  <div class="col-md-4 col-xs-6 marginTop" *ngFor="let fom of form;let i = index">
    <md-card>
        <md-card-title><span (click)="del(fom)">X</span></md-card-title>
        <md-card-content>
          <div class="row">
            <div class="col-md-12">
              <md-input type="text" (change)="onChange($event, 'educationalLevel', i)" [(ngModel)]="fom.educationalLevel" placeholder="educationalLevel"></md-input>
              <md-input type="text" (change)="onChange($event, 'school', i)" [(ngModel)]="fom.school" placeholder="school"></md-input>
              <md-input type="text" (change)="onChange($event, 'educationQualificationLevel', i)" [(ngModel)]="fom.educationQualificationLevel" placeholder="educationQualificationLevel"></md-input>
              <md-input type="text" (change)="onChange($event, 'qualification', i)" [(ngModel)]="fom.qualification" placeholder="qualification"></md-input>
              <md-input type="text" (change)="onChange($event, 'specialty', i)" [(ngModel)]="fom.specialty" placeholder="specialty"></md-input>
              <md-input type="text" (change)="onChange($event, 'seriesAndNumberOfDiploma', i)" [(ngModel)]="fom.seriesAndNumberOfDiploma" placeholder="seriesAndNumberOfDiploma"></md-input>
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
