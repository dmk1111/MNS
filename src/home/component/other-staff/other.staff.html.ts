//noinspection TsLint
export const otherStaffHtml = `
  <div class="row">
    <div class="col-md-3 col-sm-4">
      <md-input-container>
       <input mdInput (change)="onChange('birthplace', $event)" type="text" [(ngModel)]="form.birthplace" placeholder="birthplace" [ngModelOptions]="{standalone: true}">
     </md-input-container>
  </div>
    <div class="col-md-3 col-sm-4">
      <select (change)="onChange('sex', $event)" [(ngModel)]="form.sex" [ngModelOptions]="{standalone: true}">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div class="col-md-3 col-sm-4">
     <md-input-container>
      <input mdInput (change)="onChange('citizenship', $event)" type="text" [(ngModel)]="form.citizenship" placeholder="citizenship" [ngModelOptions]="{standalone: true}">
    </md-input-container>
   </div>
    <div class="col-md-3 col-sm-4">
           <md-input-container>
 <input mdInput (change)="onChange('seriesAndPassportNumber', $event)" type="text" [(ngModel)]="form.seriesAndPassportNumber" placeholder="seriesAndPassportNumber" [ngModelOptions]="{standalone: true}">
       </md-input-container>
 </div>
    <div class="col-md-3 col-sm-4">
           <md-input-container>
 <input mdInput (change)="onChange('seriesAndNumberOfOfficialIdentification', $event)" type="text" [(ngModel)]="form.seriesAndNumberOfOfficialIdentification" placeholder="seriesAndNumberOfOfficialIdentification" [ngModelOptions]="{standalone: true}">
      </md-input-container>
  </div>
    <div class="col-md-3 col-sm-4">
           <md-input-container>
 <input mdInput (change)="onChange('identificationCode', $event)" type="text" [(ngModel)]="form.identificationCode" placeholder="identificationCode" [ngModelOptions]="{standalone: true}">
       </md-input-container>
 </div>
    <div class="col-md-3 col-sm-4">
           <md-input-container>
 <input mdInput (change)="onChange('placeOfResidence', $event)" type="text" [(ngModel)]="form.placeOfResidence" placeholder="placeOfResidence" [ngModelOptions]="{standalone: true}">
        </md-input-container>
</div>
    <div class="col-md-3 col-sm-4">
           <md-input-container>
 <input mdInput (change)="onChange('phoneNumbers', $event)" type="text" [(ngModel)]="form.phoneNumbers" placeholder="phoneNumbers" [ngModelOptions]="{standalone: true}">
       </md-input-container>
 </div>
     <div class="col-md-3 col-sm-4">
      <form action="demo_form.asp" method="get">
          <input type="checkbox" (change)="onChange('maritalalStatus', $event)" name="maritalStatus" [(ngModel)]="form.maritalalStatus" [ngModelOptions]="{standalone: true}"> Married<br>
      </form>
    </div>
    <div class="col-md-3 col-sm-4">
            <md-input-container>
<input mdInput (change)="onChange('wifeHusband', $event)" type="text" [(ngModel)]="form.wifeHusband" placeholder="wifeHusband" [ngModelOptions]="{standalone: true}">
       </md-input-container>
 </div>
    <div class="col-md-3 col-sm-4">
      <form action="demo_form.asp" method="get">
          <input (change)="onChange('children', $event)" type="checkbox" name="children" [(ngModel)]="form.children" [ngModelOptions]="{standalone: true}">Have Clhildren<br>
      </form>
    </div>
 </div>
`;
