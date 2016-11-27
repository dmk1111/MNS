export const otherStaffHtml = `
<form>
  <div class="row">
    <div class="col-md-3 col-sm-4">
      <md-input type="text" [(ngModel)]="form.birthplace" placeholder="birthplace" [ngModelOptions]="{standalone: true}"></md-input>
    </div>
    <div class="col-md-3 col-sm-4">
      <select>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div class="col-md-3 col-sm-4">
      <md-input type="text" [(ngModel)]="form.citizenship" placeholder="citizenship" [ngModelOptions]="{standalone: true}"></md-input>
    </div>
    <div class="col-md-3 col-sm-4">
      <md-input type="text" [(ngModel)]="form.seriesAndPassportNumber" placeholder="seriesAndPassportNumber" [ngModelOptions]="{standalone: true}"></md-input>
    </div>
    <div class="col-md-3 col-sm-4">
      <md-input type="text" [(ngModel)]="form.seriesAndNumberOfOfficialIdentification" placeholder="seriesAndNumberOfOfficialIdentification" [ngModelOptions]="{standalone: true}"></md-input>
    </div>
    <div class="col-md-3 col-sm-4">
      <md-input type="text" [(ngModel)]="form.identificationCode" placeholder="identificationCode" [ngModelOptions]="{standalone: true}"></md-input>
    </div>
    <div class="col-md-3 col-sm-4">
      <md-input type="text" [(ngModel)]="form.placeOfResidence" placeholder="placeOfResidence" [ngModelOptions]="{standalone: true}"></md-input>
    </div>
    <div class="col-md-3 col-sm-4">
      <md-input type="text" [(ngModel)]="form.phoneNumbers" placeholder="phoneNumbers" [ngModelOptions]="{standalone: true}"></md-input>
    </div>
     <div class="col-md-3 col-sm-4">
      <form action="demo_form.asp" method="get">
          <input type="checkbox" name="maritalStatus" [(ngModel)]="form.maritalalStatus"> Married<br>
      </form>
    </div>
    <div class="col-md-3 col-sm-4">
      <md-input type="text" [(ngModel)]="form.wifeHusband" placeholder="wifeHusband" [ngModelOptions]="{standalone: true}"></md-input>
    </div>
    <div class="col-md-3 col-sm-4">
      <form action="demo_form.asp" method="get">
          <input type="checkbox" name="children" [(ngModel)]="form.children">Have Clhildren<br>
      </form>
    </div>
 </div>
</form>
`;
