//noinspection TsLint
export const staffDocumetHtml = `
<md-card>
  <md-card-title>
   <div class="col-xs-12">
      <div class="col-xs-10">
        <md-input-container style="width: 30%; float: right">
                      <input
                        mdInput
                        type="text"
                        placeholder="Назва файлу"
                        [(ngModel)]="uploadFileName"
                       >
      </md-input-container>
      </div>
      
      <div class="col-xs-2">
         <input id="f1" type="file" (change)="handle($event)" style="    
            width: 0.1px;
            height: 0.1px;
            opacity: 0;
            overflow: hidden;
            z-index: -1;">
      <label for="f1" style="float: right">
          <i class="material-icons" style="font-size: 48px;
    color: blue;">file_upload</i>
      </label>
      </div>
      
   
  </div>
    
  </md-card-title>
  <md-card-content>
        <!--Tabs-->
        <div>
          
          <!--Top Nav Bar-->
            <ul class="nav nav-tabs">
                <li  [ngClass]="{active: tabIndex === 1}"><a (click)="handleTab(1)">Документи</a></li>
                <li [ngClass]="{active: tabIndex === 2}"><a (click)="handleTab(2)">Люстрація</a></li>
                <li [ngClass]="{active: tabIndex === 3}"><a (click)="handleTab(3)">Спецперевірка</a></li>
                <li [ngClass]="{active: tabIndex === 4}"><a (click)="handleTab(4)">Декларація</a></li>
            </ul> 
            <!---->
            
      </div>
      
      <!--Document-->
      <div>
           <md-list>
               <md-list-item *ngFor="let doc of docs">
                  <md-icon md-list-avatar style="color: blue;cursor: pointer" (click)="downloadDoc(doc)">
                  file_download</md-icon>
                  <h4 md-line>
                    <md-input-container (click)="doc.disambled = true" style="width: 40%">
                      <input
                        mdInput
                        type="text"
                        placeholder="Назва"
                        (change)="saveDocName(doc)"
                        [(ngModel)]="doc.name"
                        [disabled]="true"
                       >
                  </md-input-container>
                  <span (click)="deleteDocument(doc.id)" style="cursor: pointer">X</span>
                </h4>
               </md-list-item>
          </md-list>
      </div>
    
  </md-card-content>
</md-card>
`;

