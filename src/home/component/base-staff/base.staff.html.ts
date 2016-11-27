//noinspection TsLint
export const baseStaffHtml = `
<form>
<div class="row">
  <div *ngFor="let field of formObject" class="col-md-3 col-sm-4 col-xs-6">
    <md-input 
      [type]="field.type"
      [placeholder]="field.key" 
      [ngModelOptions]="{standalone: true}" 
      [(ngModel)]="field.value">
    </md-input>
  </div>
</div>
</form>
`;
