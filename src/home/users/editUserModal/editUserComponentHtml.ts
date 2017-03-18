//noinspection TsLint
export const editUserModal = `
<div class="modal-fade"></div>
<div class="modal show">
  <div class="modal-dialog" >
    <div class="modal-content">
      <div class="modal-header">
        <!--<h5 class="modal-title">{{user.firstName}} {{user.lastName}}</h5>-->
        <button type="button" class="close" data-dismiss="modal" (click)="close()" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      
         <form class="form-horizontal">
         
            <div class="form-group">
              <label class="control-label col-sm-2" for="email">Пошта:</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="email" [(ngModel)]="user.email" placeholder="Ведіть пошту" [ngModelOptions]="{standalone: true}">
              </div>
            </div>
            
            <div class="form-group">
              <label class="control-label col-sm-2" for="pwd">Імя</label>
              <div class="col-sm-10">          
                <input type="text" class="form-control" [(ngModel)]="user.firstName" id="pwd" placeholder="Ведіть Імя" [ngModelOptions]="{standalone: true}">
              </div>
            </div>
            
            <div class="form-group">
              <label class="control-label col-sm-2" for="pwd">Прізвище</label>
              <div class="col-sm-10">          
                <input type="text" class="form-control" id="pwd" [(ngModel)]="user.lastName" placeholder="Ведіть прізвище"[ngModelOptions]="{standalone: true}">
              </div>
            </div>
            
             <div class="form-group">
              <label class="control-label col-sm-2" for="pwd">Пароль</label>
              <div class="col-sm-10">          
                <input type="password" class="form-control" id="pwd" [(ngModel)]="user.password" placeholder="Ведіть пароль"[ngModelOptions]="{standalone: true}">
              </div>
            </div>
            
            
            <div class="form-group">
              <label class="control-label col-sm-2" for="pwd">Роль</label>
              <div class="col-sm-10">  
                 <select class="form-control" [(ngModel)]="user.role" [ngModelOptions]="{standalone: true}">
                  <option value="ROLE_OPERATOR">Оператор</option> 
                  <option value="ROLE_ADMIN">Адмін</option> 
                </select>   
              </div>
            </div>
            
            <div class="form-group">
              <label class="control-label col-sm-2" for="pwd">Регіони</label>
              <div class="col-sm-10">          
                <ng-select
                  [options]="regions"
                  [multiple]="true"
                  [(ngModel)]="userRegion"
                  [ngModelOptions]="{standalone: true}"
                  >
               </ng-select>
              </div>
            </div>
            
          </form>
        
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" style="float: left" (click)="deleteUser()" *ngIf="isCreate">Видалити</button>
        <button type="button" class="btn btn-primary" (click)="save()" *ngIf="isCreate">Зберегти</button>
        <button type="button" class="btn btn-primary" (click)="create()" *ngIf="!isCreate">Створити</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal" (click)="close()">Закрити</button>
      </div>
    </div>
  </div>
</div>
`;
