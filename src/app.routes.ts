import { Routes } from '@angular/router';
import { Home } from './home';
import { Login } from './login';
import { AuthGuard } from './common/auth.guard';
import { StaffListComponent } from './home/staff/staffList';
import { DeleteStaffComponent } from './home/component/deletedStaff/deleted.staff';
// import { PositionComponent } from './home/position/position.compoennt';
// import { RankComponent } from './home/rank/rank.component';
import { MenuComponent } from './home/menu/menu.component';
import { AdminComponent } from './home/admin/admin,compoennt';
import { PositionBook } from './home/positionBooks/positionBook.component';

export const routes: Routes = [
  { path: '',       redirectTo: 'home', pathMatch: 'full' },
  { path: 'login',  component: Login },
  { path: 'home',
    component: Home,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu',  component: MenuComponent },
      { path: 'staff',  component: StaffListComponent },
      { path: 'deletedStaff',  component: DeleteStaffComponent },
      { path: 'admin',  component: AdminComponent },
      { path: 'position-book',  component: PositionBook },
    ],
    canActivate: [AuthGuard] },
  { path: '**',     redirectTo: 'home', pathMatch: 'full' },
];
