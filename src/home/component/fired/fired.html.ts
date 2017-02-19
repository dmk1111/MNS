//noinspection TsLint
export const firedHtml = `
<div class="row" *ngIf="form">
    <div class="col-md-3 col-sm-4">
      <md-input-container>
       <input mdInput (change)="onChange('article', $event)" type="text" [(ngModel)]="form.article" placeholder="article" [ngModelOptions]="{standalone: true}">
      </md-input-container>
    </div>
    <div class="col-md-3 col-sm-4">
      <md-input-container>
        <input mdInput (change)="onChange('conclusion', $event)" type="text" [(ngModel)]="form.conclusion" placeholder="conclusion" [ngModelOptions]="{standalone: true}">
      </md-input-container>
    </div>
    <div class="col-md-3 col-sm-4">
      <md-input-container>
        <input mdInput (change)="onChange('dateFiring', $event)" type="date" [(ngModel)]="form.dateFiring" placeholder="dateFiring" [ngModelOptions]="{standalone: true}">
      </md-input-container>
    </div>
    <div class="col-md-3 col-sm-4">
      <md-input-container>
        <input mdInput (change)="onChange('lastPosition', $event)" type="text" [(ngModel)]="form.lastPosition" placeholder="lastPosition" [ngModelOptions]="{standalone: true}">
      </md-input-container>
    </div>
    <div class="col-md-3 col-sm-4">
      <md-input-container>
        <input mdInput (change)="onChange('militaryAccount', $event)" type="text" [(ngModel)]="form.militaryAccount" placeholder="militaryAccount" [ngModelOptions]="{standalone: true}">
      </md-input-container>
    </div>
    <div class="col-md-3 col-sm-4">
      <md-input-container>
        <input mdInput (change)="onChange('orderNumber', $event)" type="text" [(ngModel)]="form.orderNumber" placeholder="orderNumber" [ngModelOptions]="{standalone: true}">
      </md-input-container>
    </div>
    <div class="col-md-3 col-sm-4">
      <md-input-container>
        <input mdInput (change)="onChange('personalFileForwarded', $event)" type="text" [(ngModel)]="form.personalFileForwarded" placeholder="personalFileForwarded" [ngModelOptions]="{standalone: true}">
      </md-input-container>
    </div>
    <div class="col-md-3 col-sm-4">
      <md-input-container>
        <input mdInput (change)="onChange('referenceLEKCertificate', $event)" type="text" [(ngModel)]="form.referenceLEKCertificate" placeholder="referenceLEKCertificate" [ngModelOptions]="{standalone: true}">
      </md-input-container>
    </div>
    <div class="col-md-3 col-sm-4">
      <md-input-container>
       <input mdInput (change)="onChange('referenceLEKNumber', $event)" type="text" [(ngModel)]="form.referenceLEKNumber" placeholder="referenceLEKNumber" [ngModelOptions]="{standalone: true}">
      </md-input-container>
    </div>
    <div class="col-md-3 col-sm-4">
      <md-input-container>
        <input mdInput (change)="onChange('seniority', $event)" type="text" [(ngModel)]="form.seniority" placeholder="seniority" [ngModelOptions]="{standalone: true}">
      </md-input-container>
    </div>
    <div class="col-md-3 col-sm-4">
      <md-input-container>
      <input mdInput (change)="onChange('specialRank', $event)" type="text" [(ngModel)]="form.specialRank" placeholder="specialRank" [ngModelOptions]="{standalone: true}">
      </md-input-container>
    </div>
    <div class="col-md-3 col-sm-4">
      <md-input-container>
        <input mdInput (change)="onChange('whereFired', $event)" type="text" [(ngModel)]="form.whereFired" placeholder="whereFired" [ngModelOptions]="{standalone: true}">
      </md-input-container>
    </div>

 </div>
`;
