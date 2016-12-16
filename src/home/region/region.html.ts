export const regionHtml = `
<md-card>
  <md-card-content>
    <h3>Регіони</h3>
    <md-list>
         <md-list-item *ngFor="let reg of regions">
            <h4 md-line>{{doc.name}}</h4>
            <p md-line class="demo-2"> {{doc.id}} </p>
         </md-list-item>
    </md-list>
  </md-card-content>
</md-card>
`;
