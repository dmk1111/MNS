//noinspection TsLint
export const firedHtml = `
<div class="row" *ngIf="form">
  <md-card>
  
     <div class="row">
                <div class="col-xs-5 lable">Дата наказу про звільнення   -   </div>
                <div class="col-xs-6">
                  <md-input-container style="width: 100%">
                    <input
                      mdInput
                      (change)="onChange('dateFiring', $event)"
                      type="date"
                      placeholder="Дата"
                      [ngModelOptions]="{standalone: true}" 
                      [(ngModel)]="form.dateFiring">
                  </md-input-container>
                </div>
              </div>  
              
              <div class="row">
                <div class="col-xs-5 lable">Номер наказу про звільнення  -   </div>
                <div class="col-xs-6">
                  <md-input-container style="width: 100%">
                    <input
                      mdInput
                      (change)="onChange('orderNumber', $event)"
                      type="text"
                      placeholder="Номер"
                      [ngModelOptions]="{standalone: true}" 
                      [(ngModel)]="form.orderNumber">
                  </md-input-container>
                </div>
              </div>  
              
               <div class="row">
                <div class="col-xs-5 lable">Пункт (стаття) звільнення  -   </div>
                <div class="col-xs-6">
                  <md-input-container style="width: 100%">
                    <input
                      mdInput
                      (change)="onChange('article', $event)"
                      type="text"
                      placeholder="Статя"
                      [ngModelOptions]="{standalone: true}" 
                      [(ngModel)]="form.article">
                  </md-input-container>
                </div>
              </div> 
              
              <div class="row">
                <div class="col-xs-5 lable">Остання займана посада  -   </div>
                <div class="col-xs-6">
                  <md-input-container style="width: 100%">
                    <input
                      mdInput
                      (change)="onChange('lastPosition', $event)"
                      type="text"
                      placeholder="Посада"
                      [ngModelOptions]="{standalone: true}" 
                      [(ngModel)]="form.lastPosition">
                  </md-input-container>
                </div>
              </div> 
              
              
               <div class="row">
                <div class="col-xs-5 lable">Спеціальне звання  -   </div>
                <div class="col-xs-6">
                  <md-input-container style="width: 100%">
                    <input
                      mdInput
                      (change)="onChange('specialRank', $event)"
                      type="text"
                      placeholder="Звання"
                      [ngModelOptions]="{standalone: true}" 
                      [(ngModel)]="form.specialRank">
                  </md-input-container>
                </div>
              </div> 
              
              
              <div class="row">
                <div class="col-xs-5 lable">Військовий облік  -   </div>
                <div class="col-xs-6">
                  <md-input-container style="width: 100%">
                    <input
                      mdInput
                      (change)="onChange('militaryAccount', $event)"
                      type="text"
                      placeholder="Облік"
                      [ngModelOptions]="{standalone: true}" 
                      [(ngModel)]="form.militaryAccount">
                  </md-input-container>
                </div>
              </div> 
              
              
         <div class="row">
            <div class="col-xs-5 lable">Довідка ЦЛЕК (ЛЕК) (свідоцтво) - </div>
            <div class="col-xs-7" style="padding: 0">
            
              <div class="col-xs-6">
                <md-input-container style="width: 100%">
                  <input
                    mdInput
                    type="date"
                    (change)="onChange('referenceLEKCertificate', $event)"
                    [ngModelOptions]="{standalone: true}"
                     placeholder="Дата"
                    [(ngModel)]="form.referenceLEKCertificate">
                </md-input-container>
              </div>
              <div class="col-xs-6">
                <md-input-container style="width: 60%">
                  <input
                    mdInput
                    type="text"
                    (change)="onChange('referenceLEKNumber', $event)"
                    [ngModelOptions]="{standalone: true}"
                     placeholder="Номер"
                     [(ngModel)]="form.referenceLEKNumber"
                    >
                </md-input-container>
              </div>
              
            </div>
          </div>
          
          
           <div class="row">
                <div class="col-xs-5 lable">Висновок  -   </div>
                <div class="col-xs-6">
                  <md-input-container style="width: 100%">
                    <textarea
                      mdInput
                      mdTextareaAutosize
                      minRows="1"
                      maxRows="6"
                      (change)="onChange('conclusion', $event)"
                      type="text"
                      placeholder="Висновок"
                      [ngModelOptions]="{standalone: true}" 
                      [(ngModel)]="form.conclusion"></textarea>
                  </md-input-container>
                </div>
              </div> 
              
              
              <div class="row">
                <div class="col-xs-5 lable" style="margin-top: 9px">Вислуга років на службі    -   </div>
                <div class="col-xs-6">
                  
                   <div class="col-xs-3">
                        <md-input-container>
                          <input mdInput type="number" style="width: 100%" min="0" (change)="onChange('VuslugaYear', $event)" [(ngModel)]="form.VuslugaYear" placeholder="РР">
                        </md-input-container>
                    </div>
                    
                    <div class="col-xs-3">
                        <md-input-container>
                          <input mdInput type="number" style="width: 100%" min="0" max="12" (change)="onChange('Vuslugamonth', $event)" [(ngModel)]="form.Vuslugamonth" placeholder="ММ">
                        </md-input-container>
                    </div>
                    
                    <div class="col-xs-3">
                        <md-input-container>
                          <input mdInput type="number" style="width: 100%" min="0" max="31" (change)="onChange('VuslugaDay', $event)" [(ngModel)]="form.VuslugaDay" placeholder="ДД">
                        </md-input-container>
                    </div>
                  
                </div>
              </div> 
          
          
  </md-card>
  
    
    <!--<div class="col-md-3 col-sm-4">-->
      <!--<md-input-container>-->
        <!--<input mdInput (change)="onChange('conclusion', $event)" type="text" [(ngModel)]="form.conclusion" placeholder="conclusion" [ngModelOptions]="{standalone: true}">-->
      <!--</md-input-container>-->
    <!--</div>-->
    <!--<div class="col-md-3 col-sm-4">-->
      <!--<md-input-container>-->
        <!--<input mdInput (change)="onChange('personalFileForwarded', $event)" type="text" [(ngModel)]="form.personalFileForwarded" placeholder="personalFileForwarded" [ngModelOptions]="{standalone: true}">-->
      <!--</md-input-container>-->
    <!--</div>-->
    <!--<div class="col-md-3 col-sm-4">-->
      <!--<md-input-container>-->
        <!--<input mdInput (change)="onChange('seniority', $event)" type="text" [(ngModel)]="form.seniority" placeholder="seniority" [ngModelOptions]="{standalone: true}">-->
      <!--</md-input-container>-->
    <!--</div>-->
    <!--<div class="col-md-3 col-sm-4">-->
      <!--<md-input-container>-->
        <!--<input mdInput (change)="onChange('whereFired', $event)" type="text" [(ngModel)]="form.whereFired" placeholder="whereFired" [ngModelOptions]="{standalone: true}">-->
      <!--</md-input-container>-->
    <!--</div>-->

 </div>
`;
