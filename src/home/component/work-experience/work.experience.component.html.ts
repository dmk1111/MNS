//noinspection TsLint
export const WorkExperienceHtml = `
<div class="row"
              [ngBusy]="{busy: load, message: 'Завантаження', backdrop: true}"
              style="z-index: 999999999"
             >
  <div class="col-md-12 col-xs-12 marginTop" *ngFor="let fom of form;let i = index">
    <md-card>
        <md-card-title>
          <span 
            (click)="del(fom);"
          >X</span>
        </md-card-title>
        <md-card-content>
          <!--<div class="row">-->
            <!--<div class="col-md-12">-->
              <md-input type="textarea" style="width: 100%" (change)="onChange($event, 'orgName', i)" [(ngModel)]="fom.orgName" ><md-placeholder >Коментар</md-placeholder></md-input>
              <md-input type="date" style="width: 100%" (change)="onChange($event, 'fromDate', i)" [(ngModel)]="fom.fromDate" placeholder="Дата початку"></md-input>
              <md-input type="date" style="width: 100%" (change)="onChange($event, 'toDate', i)" [(ngModel)]="fom.toDate" placeholder="Дата закінченя"></md-input>
            <!--</div>-->
            <!--<div class="col-md-12">-->
            <!--</div>-->
          <!--</div>-->
        </md-card-content>
    </md-card>
  </div>
  <div class="col-md-12 col-xs-12" style="margin-top: 10px">
  <md-card style="height: 260px" (click)="addExp()">
        <md-card-content>
          <div class="row">
            Додати
            <div class="col-md-12">
            </div>
          </div>
        </md-card-content>
    </md-card>
  </div>
</div>
`
