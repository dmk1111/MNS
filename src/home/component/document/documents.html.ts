export const staffDocumetHtml = `
<md-card>
  <md-card-title>
    <input id="f1" type="file" (change)="handle($event)" style="    
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      z-index: -1;">
      <!--<my-spinner [isRunning]="isRequesting"></my-spinner>-->
      <label *ngIf="!isRequesting" for="f1" style="float: right">
          <i class="material-icons" style="font-size: 48px;
    color: blue;">file_upload</i>
      </label>
  </md-card-title>
  <md-card-content>
    <h3>Документи</h3>
    <md-list>
         <md-list-item *ngFor="let doc of docs">
            <md-icon md-list-avatar style="color: blue;cursor: pointer" (click)="downloadDoc(doc)">
            file_download</md-icon>
            <h4 md-line>{{doc.name}}</h4>
            <p md-line class="demo-2"> {{doc.id}} </p>
         </md-list-item>
    </md-list>
  </md-card-content>
</md-card>
`;

