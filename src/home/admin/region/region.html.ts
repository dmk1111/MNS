export const regionHtml = `
<md-card [ngBusy]="{busy: load, message: 'Завантаження'}" style="">
  <md-card-content>
  <div>
    <h3>Регіони</h3>
    <input [(ngModel)]="region" placeholder="Назва регіону">
    <button (click)="addRegion(region)" class="btn btn-default">Додати</button>
  </div> 
    <md-list>
     <div *ngFor="let reg of regions" style="width: 20%">
         <md-list-item >
            <h4 md-line>{{reg.name}}</h4><span (click)="deleteRegion(reg)" title="Видалити">
            <md-icon class="delete-icon">highlight_off</md-icon></span>
         </md-list-item>
          <md-divider></md-divider>
      </div>
    </md-list>
  </md-card-content>
</md-card>
`;
