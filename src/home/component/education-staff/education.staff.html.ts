//noinspection TsLint
export const educationStaffHtml = `
<div class="row" [ngBusy]="{busy: load, message: 'Завантаження', backdrop: true}" style="z-index: 99999999">
  <div class="col-md-4 col-xs-6 marginTop" *ngFor="let fom of form;let i = index">
    <md-card>
        <md-card-title><span (click)="del(fom)">X</span></md-card-title>
        <md-card-content>
          <div class="row">
            <div class="col-md-12">
            
              <md-input-container style="width: 100%">
                <input mdInput type="text" (change)="onChange($event, 'educationalLevel', i)" [(ngModel)]="fom.educationalLevel" placeholder="Освітний рівень">
              </md-input-container >
              
              <md-input-container style="width: 100%">
                <input mdTextareaAutosize mdInput type="text" maxRows="5" minRows="1" (change)="onChange($event, 'school', i)" [(ngModel)]="fom.school" placeholder="Навчальний заклад">
              </md-input-container>
              
              <md-input-container style="width: 100%">
                <textarea mdTextareaAutosize mdInput type="text" maxRows="5" minRows="1" (change)="onChange($event, 'qualification', i)" [(ngModel)]="fom.qualification" placeholder="Кваліфікація"></textarea>
              </md-input-container>
              
              <md-input-container style="width: 100%">
                <textarea mdTextareaAutosize mdInput type="text" maxRows="5" minRows="1" (change)="onChange($event, 'specialty', i)" [(ngModel)]="fom.specialty" placeholder="Спеціальність"></textarea>
              </md-input-container>
             
             <md-input-container style="width: 100%">
              <input mdInput type="text" (change)="onChange($event, 'seriesAndNumberOfDiploma', i)" [(ngModel)]="fom.seriesAndNumberOfDiploma" placeholder="Серія та номер диплому">
             </md-input-container>
            
             <md-input-container style="width: 100%">
                  <textarea mdTextareaAutosize mdInput maxRows="5" type="text" (change)="onChange($event, 'educationQualificationLevel', i)" [(ngModel)]="fom.educationQualificationLevel" placeholder="Освітньо-кваліфікаційний рівень"></textarea>
             </md-input-container>
            
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
            <span>Додати</span>
            <div class="col-md-12">
            </div>
          </div>
        </md-card-content>
    </md-card>
  </div>
</div>
`;
