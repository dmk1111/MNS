import { Routes } from '@angular/router';
import { Home } from './home';
import { Login } from './login';
import { AuthGuard } from './common/auth.guard';
import { StaffListComponent } from './home/staff/staffList';

export const routes: Routes = [
  { path: '',       component: Login },
  { path: 'login',  component: Login },
  { path: 'home',
    component: Home,
    children: [
      { path: '', redirectTo: 'staff', pathMatch: 'full' },
      { path: 'staff',  component: StaffListComponent },
    ],
    canActivate: [AuthGuard] },
  { path: '**',     component: Login },
];
