//noinspection TsLint
export const editUserModal = `
<div class="modal-fade"></div>
<div class="modal show">
  <div class="modal-dialog" >
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{user.firstName}} {{user.lastName}}</h5>
        <button type="button" class="close" data-dismiss="modal" (click)="close()" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      
         <form class="form-horizontal">
         
            <div class="form-group">
              <label class="control-label col-sm-2" for="email">Пошта:</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="email" [(ngModel)]="user.email" placeholder="Ведіть пошту">
              </div>
            </div>
            
            <div class="form-group">
              <label class="control-label col-sm-2" for="pwd">Імя</label>
              <div class="col-sm-10">          
                <input type="password" class="form-control" [(ngModel)]="user.firstName" id="pwd" placeholder="Вудіть Імя">
              </div>
            </div>
            
            <div class="form-group">
              <label class="control-label col-sm-2" for="pwd">Прізвище</label>
              <div class="col-sm-10">          
                <input type="password" class="form-control" id="pwd" [(ngModel)]="user.lastName" placeholder="Вудіть прізвище">
              </div>
            </div>
            
            <ng-select
              [options]="regions"
              [multiple]="true"
              [(ngModel)]="user.region"
              >
            </ng-select>
            
          </form>
        
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="close()">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal" (click)="close()">Close</button>
      </div>
    </div>
  </div>
</div>
`;
