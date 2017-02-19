import { Routes } from '@angular/router';
import { Home } from './home';
import { Login } from './login';
import { AuthGuard } from './common/auth.guard';
import { StaffListComponent } from './home/staff/staffList';
import { DeleteStaffComponent } from './home/component/deletedStaff/deleted.staff';
import { RegionComponent } from './home/region/region.comp';
import { UsersComponent } from './home/users/users.component';
import { PositionComponent } from './home/position/position.compoennt';

export const routes: Routes = [
  { path: '',       redirectTo: 'home', pathMatch: 'full' },
  { path: 'login',  component: Login },
  { path: 'home',
    component: Home,
    children: [
      { path: '', redirectTo: 'staff', pathMatch: 'full' },
      { path: 'staff',  component: StaffListComponent },
      { path: 'deletedStaff',  component: DeleteStaffComponent },
      { path: 'region',  component: RegionComponent },
      { path: 'position',  component: PositionComponent },
      { path: 'users',  component: UsersComponent }
    ],
    canActivate: [AuthGuard] },
  { path: '**',     redirectTo: 'home', pathMatch: 'full' },
];
