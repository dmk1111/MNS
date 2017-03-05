//noinspection TsLint
export const otherStaffHtml = `
<md-card>
    <div class="row">
    
         <div class="row">
              <div class="col-xs-5 lable">Місце народження   -   </div>
              <div class="col-xs-6">
                <md-input-container style="width: 80%">
                  <input
                    mdInput
                    (change)="onChange('birthplace', $event)"
                    type="text"
                    placeholder="Місце народження"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="form.birthplace">
                </md-input-container>
              </div>
            </div>  
            
            <div class="row">
              <div class="col-xs-5 lable">Місце народження   -   </div>
              <div class="col-xs-6">
                <select (change)="onChange('sex', $event)" [(ngModel)]="form.sex" [ngModelOptions]="{standalone: true}">
                   <option value="male">Чоловік</option>
                <option value="female">Жінка</option>
              </select>
              </div>
            </div> 
            
            
            <div class="row">
              <div class="col-xs-5 lable">Громадянство   -   </div>
              <div class="col-xs-6">
                <md-input-container style="width: 80%">
                  <input
                    mdInput
                    (change)="onChange('citizenship', $event)"
                    type="text"
                    placeholder="Громадянство"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="form.citizenship">
                </md-input-container>
              </div>
            </div>  
            
            <div class="row">
              <div class="col-xs-5 lable">Серія та номер паспорту   -   </div>
              <div class="col-xs-6">
                <md-input-container style="width: 80%">
                  <input
                    mdInput
                    (change)="onChange('seriesAndPassportNumber', $event)"
                    type="text"
                    placeholder="Серія та номер паспорту"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="form.seriesAndPassportNumber">
                </md-input-container>
              </div>
            </div> 
       
       
       <div class="row">
              <div class="col-xs-5 lable">Серія та номер службового посвідчення   -   </div>
              <div class="col-xs-6">
                <md-input-container style="width: 80%">
                  <input
                    mdInput
                    (change)="onChange('seriesAndNumberOfOfficialIdentification', $event)"
                    type="text"
                    placeholder="Серія та номер"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="form.seriesAndNumberOfOfficialIdentification">
                </md-input-container>
              </div>
        </div>
        
         <div class="row">
              <div class="col-xs-5 lable">Ідентифікаційний код   -   </div>
              <div class="col-xs-6">
                <md-input-container style="width: 80%">
                  <input
                    mdInput
                    (change)="onChange('identificationCode', $event)"
                    type="text"
                    placeholder="Код"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="form.identificationCode">
                </md-input-container>
              </div>
        </div>
            
            <div class="row">
              <div class="col-xs-5 lable">Місце проживання   -   </div>
              <div class="col-xs-6">
                <md-input-container style="width: 80%">
                  <input
                    mdInput
                    (change)="onChange('placeOfResidence', $event)"
                    type="text"
                    placeholder="Місце проживання"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="form.placeOfResidence">
                </md-input-container>
              </div>
        </div>
        
        
        <div class="row">
              <div class="col-xs-5 lable">Номер телефонів   -   </div>
              <div class="col-xs-6">
                <md-input-container style="width: 80%">
                  <input
                    mdInput
                    (change)="onChange('phoneNumbers', $event)"
                    type="tel"
                    placeholder="Номер"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="form.phoneNumbers">
                </md-input-container>
              </div>
        </div>
        
        <div class="row">
              <div class="col-xs-5 lable">Сімейний стан  -   </div>
              <div class="col-xs-6">
                <md-input-container style="width: 80%">
                  <input
                    mdInput
                    (change)="onChange('maritalalStatus', $event)"
                    type="text"
                    placeholder="Сімейний стан"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="form.maritalalStatus">
                </md-input-container>
              </div>
        </div>
     
     <div class="row">
              <div class="col-xs-5 lable">Дружина (чоловік)  -   </div>
              <div class="col-xs-6">
                <md-input-container style="width: 80%">
                  <input
                    mdInput
                    (change)="onChange('wifeHusband', $event)"
                    type="text"
                    placeholder="Дружина (чоловік)"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="form.wifeHusband">
                </md-input-container>
              </div>
        </div>
          
          <div class="row">
              <div class="col-xs-5 lable">Діти  -   </div>
              <div class="col-xs-6">
                <md-input-container style="width: 80%">
                  <input
                    mdInput
                    (change)="onChange('children', $event)"
                    type="text"
                    placeholder="Діти)"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="form.children">
                </md-input-container>
              </div>
        </div>
          
   </div>
</md-card>
`;
