//noinspection TsLint
export const baseStaffHtml = `
<form>
<div class="row">
  <div *ngFor="let field of formObject" class="col-md-3 col-sm-4 col-xs-6">
   <md-input-container>
    <input
      mdInput
       (change)="onChange(field.key, $event)"
      [type]="field.type"
      [placeholder]="translate(field.key)" 
      [ngModelOptions]="{standalone: true}" 
      [(ngModel)]="field.value">
       </md-input-container>
  </div>
  
  <!--<div class="col-md-3 col-sm-4 col-xs-6">-->
   <!--<md-input-container>-->
    <!--<input-->
      <!--mdInput-->
       <!--(change)="onChange('biography', $event)"-->
      <!--[type]="text"-->
      <!--[placeholder]="field.key" -->
      <!--[ngModelOptions]="{standalone: true}" -->
      <!--[(ngModel)]="field.value">-->
       <!--</md-input-container>-->
  <!--</div>-->
  
  
</div>
</form>
`;
