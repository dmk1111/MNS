//noinspection TsLint
export const baseStaffHtml = `
<form>
  <div class="row">
  
    <!--перша картка-->
    <div class="col-xs-12">
      <md-card>
        <div class="row">
        
        <!--Spec zvanja-->
        <div class="row">
          <div class="col-xs-3 lable">Спецзвання   -   </div>
          <div class="col-xs-9">
            <md-input-container style="width: 80%">
              <input
                mdInput
                (change)="onChange('specialRank', $event)"
                [type]="text"
                [ngModelOptions]="{standalone: true}" 
                [(ngModel)]="data.specialRank">
            </md-input-container>
          </div>
        </div>
         
         <!--PIB-->
          <div class="row">
            <div class="col-xs-3 lable">ПІБ   -   </div>
            <div class="col-xs-9">
              <md-input-container style="width: 80%">
                <input
                  mdInput
                  (change)="onChange('fullName', $event)"
                  [type]="text"
                  [ngModelOptions]="{standalone: true}" 
                  [(ngModel)]="data.fullName">
              </md-input-container>
            </div>
          </div>
          
         <!--DOB-->
          <div class="row">
            <div class="col-xs-3 lable">Дата народження   -   </div>
            <div class="col-xs-9">
              <md-input-container style="width: 80%">
                <input
                  mdInput
                  type="date"
                  (change)="onChange('dateOfBirth', $event)"
                  [ngModelOptions]="{standalone: true}" 
                  [(ngModel)]="data.dateOfBirth">
              </md-input-container>
            </div>
          </div>
          
          <!--position-->
          <div class="row">
            <div class="col-xs-3 lable">Посада   -   </div>
            <div class="col-xs-9">
              <md-input-container style="width: 80%">
                <input
                  mdInput
                  type="text"
                  (change)="onChange('position', $event)"
                  [ngModelOptions]="{standalone: true}" 
                  [(ngModel)]="data.position">
              </md-input-container>
            </div>
          </div>
          
          <!--Освіта-->
          <div class="row">
            <div class="col-xs-3 lable">Освіта   -   </div>
            <div class="col-xs-9">
              <md-input-container style="width: 80%">
                <input
                  mdInput
                  type="text"
                 >
              </md-input-container>
            </div>
          </div>
          
          <!--Спец звання-->
          <div class="row">
            <div class="col-xs-3 lable">Дата та номер присвоєня спецзвання - </div>
            <div class="col-xs-9">
            
              <div class="col-xs-6">
                <md-input-container style="width: 100%">
                  <input
                    mdInput
                    type="date"
                    (change)="onChange('dateConferringSpecRanks', $event)"
                    [ngModelOptions]="{standalone: true}"
                     placeholder="Дата"
                    [(ngModel)]="data.dateConferringSpecRanks">
                </md-input-container>
              </div>
              <div class="col-xs-6">
                <md-input-container style="width: 60%">
                  <input
                    mdInput
                    type="text"
                    placeholder="Номер"
                    (change)="onChange('numberConferringSpeclRanks', $event)"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="data.numberConferringSpeclRanks">
                </md-input-container>
              </div>
              
            </div>
          </div>
          
          <!--Призначення -->
          <div class="row">
            <div class="col-xs-3 lable">Дата та номер призначення - </div>
            <div class="col-xs-9">
            
              <div class="col-xs-6">
                <md-input-container style="width: 100%">
                  <input
                    mdInput
                    type="date"
                    (change)="onChange('dateNumberPurpose', $event)"
                    [ngModelOptions]="{standalone: true}"
                     placeholder="Дата"
                    [(ngModel)]="data.dateNumberPurpose">
                </md-input-container>
              </div>
              <div class="col-xs-6">
                <md-input-container style="width: 60%">
                  <input
                    mdInput
                    type="text"
                    placeholder="Номер"
                    >
                </md-input-container>
              </div>
              
            </div>
          </div>
          
          <div class="row">
            <div class="col-xs-3 lable">Контракт -  </div>
            <div class="col-xs-9">
            
            <div class="col-xs-4">
                <md-input-container style="width: 100%">
                  <input
                    mdInput
                    type="text"
                    placeholder="Номер"
                    >
                </md-input-container>
              </div>
            
              <div class="col-xs-4">
                <md-input-container style="width: 100%">
                  <input
                    mdInput
                    type="date"
                    placeholder="Дата З"
                    (change)="onChange('contractFromDate', $event)"
                    [ngModelOptions]="{standalone: true}"
                    [(ngModel)]="data.contractFromDate">
                </md-input-container>
              </div>
              
              <div class="col-xs-4">
                <md-input-container style="width: 100%">
                  <input
                    mdInput
                    type="date"
                    placeholder="Дата По"
                    (change)="onChange('contractToDate', $event)"
                    [ngModelOptions]="{standalone: true}"
                    [(ngModel)]="data.contractToDate">
                </md-input-container>
              </div>
              
              
            </div>
          </div>
          
        </div>
      </md-card>
    </div>
    
    
    <!--dtuga kartka-->
    <div class="col-xs-12">
      
      <div class="col-xs-6" style="padding: 0;margin-top: 10px">
        <md-card>
          <div class="row">

            <!--Spec zvanja-->
            <div class="col-xs-12 lable" style="margin-bottom: 6px">Звільнений зі служби цівільного захисту</div>
              <div class="row">
                <!--<div class="col-xs-3 lable">дата та номер наказу -  </div>-->
                <!--<div class="col-xs-9">-->
                  
                  <div class="col-xs-7">
                     <md-input-container style="width: 100%">
                        <input
                          mdInput
                          type="date"
                          (change)="onChange('exemptionDate', $event)"
                          [ngModelOptions]="{standalone: true}"
                           placeholder="Дата наказу"
                          [(ngModel)]="data.exemptionDate">
                      </md-input-container>
                 </div>
                  <div class="col-xs-5">
                    <md-input-container style="width: 100%">
                      <input
                        mdInput
                        type="text"
                        placeholder="Номер наказу"
                        [ngModelOptions]="{standalone: true}"
                        (change)="onChange('exemptionNumOrder', $event)"
                        [(ngModel)]="data.exemptionNumOrder"
                        >
                    </md-input-container>
                  </div>
                      
                <!--</div>-->
              </div>
              
               <!--Kerivnuk-->
                <div class="col-xs-12 lable" style="margin-bottom: 6px">У розпорядженні відповідального керівника</div>
                  <div class="row">
                    <!--<div class="col-xs-3 lable">дата та номер наказу -  </div>-->
                    <!--<div class="col-xs-9">-->
                      
                      <div class="col-xs-7">
                         <md-input-container style="width: 100%">
                            <input
                              mdInput
                              type="date"
                              (change)="onChange('exemptionDate', $event)"
                              [ngModelOptions]="{standalone: true}"
                               placeholder="Дата наказу"
                              [(ngModel)]="data.exemptionDate">
                          </md-input-container>
                     </div>
                      <div class="col-xs-5">
                        <md-input-container style="width: 100%">
                          <input
                            mdInput
                            type="text"
                            placeholder="Номер наказу"
                            [ngModelOptions]="{standalone: true}"
                            (change)="onChange('exemptionNumOrder', $event)"
                            [(ngModel)]="data.exemptionNumOrder"
                            >
                        </md-input-container>
                      </div>
                          
                    <!--</div>-->
                  </div>
              
              
          </div>  
        </md-card>      
      </div>
      
      <div class="col-xs-6" Style="padding: 0;margin-top: 10px">
        <md-card>
          <div class="row">
            
            <div class="row">
              <div class="col-xs-5 lable">Прийняття присяги   -   </div>
              <div class="col-xs-6">
                <md-input-container style="width: 80%">
                  <input
                    mdInput
                    (change)="onChange('dateSwear', $event)"
                    type="date"
                    placeholder="Дата"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="data.dateSwear">
                </md-input-container>
              </div>
            </div>
            
            <div class="row">
              <div class="col-xs-5 lable">Ранг  -   </div>
              <div class="col-xs-6">
                <md-input-container style="width: 80%">
                  <input
                    mdInput
                    (change)="onChange('rankCivilServant', $event)"
                    type="number"
                    maxlength="1"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="data.rankCivilServant">
                </md-input-container>
              </div>
            </div>
            
            <div class="row">
              <div class="col-xs-5 lable">Категорія   -   </div>
              <div class="col-xs-6">
              
                <md-input-container style="width: 80%">
                  <input
                    mdInput
                    (change)="onChange('categoriesCivilServants', $event)"
                    type="text"
                    maxlength="1"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="data.categoriesCivilServants">
                </md-input-container>
                
              </div>
            </div>
            
            <div class="row">
              <div class="col-xs-5 lable">Група оплати праці -</div>
              <div class="col-xs-6">
              
                <md-input-container style="width: 80%">
                  <input
                    mdInput
                    (change)="onChange('groupRemuneration', $event)"
                    type="number"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="data.groupRemuneration">
                </md-input-container>
              </div>
            </div>
            
          </div>
        </md-card>
      </div>
    
    </div>
    
  </div>
</form>
`;
