import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate() {
    if (this.auth.isLoggedIn()) {
      this.auth.me().subscribe(user => {
        if (user.roleName === 'ROLE_ADMIN') {
          localStorage.setItem('access', 'admin');
        } else {
          localStorage.setItem('access', 'operator');
        }
      });
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
