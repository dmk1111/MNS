export const regionHtml = `
<md-card [ngBusy]="{busy: load, message: 'Завантаження'}" style="">
  <md-card-content>
  <div>
    <h3>Регіони</h3>
    <input mdInput [(ngModel)]="region" placeholder="Назва регіону">
    <button (click)="addRegion(region)">Додати</button>
  </div> 
    <md-list>
     <div *ngFor="let reg of regions" style="width: 20%">
         <md-list-item >
            <h4 md-line>{{reg.name}}</h4><span (click)="deleteRegion(reg)">X</span>
         </md-list-item>
          <md-divider></md-divider>
      </div>
    </md-list>
  </md-card-content>
</md-card>
`;
