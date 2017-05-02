//noinspection TsLint
export const educationStaffHtml = `
<div class="row" [ngBusy]="{busy: load, message: 'Завантаження', backdrop: true}" style="z-index: 99999999">
  <div class="col-xs-12 marginTop" *ngFor="let fom of form;let i = index">
    <md-card>
        <md-card-title><span (click)="del(fom)" title="Видалити"><md-icon class="delete-icon">highlight_off</md-icon></span></md-card-title>
        <md-card-content>
          <div class="row">
            <div class="col-md-12">
            
              <md-input-container style="width: 100%">
                <input mdInput type="text" (change)="onChange($event, 'educationalLevel', i)" [(ngModel)]="fom.educationalLevel" placeholder="Освітний рівень">
              </md-input-container >
              
              <md-input-container style="width: 100%">
                <input mdInput type="text" (change)="onChange($event, 'school', i)" [(ngModel)]="fom.school" placeholder="Навчальний заклад">
              </md-input-container>
              
              <md-input-container style="width: 100%">
                <input mdInput type="text" (change)="onChange($event, 'qualification', i)" [(ngModel)]="fom.qualification" placeholder="Кваліфікація">
              </md-input-container>
              
              <md-input-container style="width: 100%">
                <input mdInput type="text" (change)="onChange($event, 'specialty', i)" [(ngModel)]="fom.specialty" placeholder="Спеціальність">
              </md-input-container>
             
             <md-input-container style="width: 100%">
              <input mdInput type="text" (change)="onChange($event, 'seriesAndNumberOfDiploma', i)" [(ngModel)]="fom.seriesAndNumberOfDiploma" placeholder="Серія та номер диплому">
             </md-input-container>
            
             <md-input-container style="width: 100%">
                  <textarea mdTextareaAutosize mdInput  mdAutosizeMinRows="1" mdAutosizeMaxRows="10" type="text" (change)="onChange($event, 'educationQualificationLevel', i)" [(ngModel)]="fom.educationQualificationLevel" placeholder="Освітньо-кваліфікаційний рівень"></textarea>
             </md-input-container>
            
            </div>
          </div>
        </md-card-content>
    </md-card>
  </div>
  <div class="col-xs-12">
    <button md-raised-button color="primary" class="col-xs-12" (click)="addEdu()">Додати</button>
  </div>
`;
