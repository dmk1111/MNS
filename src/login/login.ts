import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastsManager } from 'ng2-toastr';
import { UserApiService } from '../services/user.service';

const styles   = require('./login.css');
const template = require('./login.html');
@Component({
  selector: 'login',
  template: template,
  styles: [ styles ]
})
export class Login {
  private isLogin = true;
  constructor(public toast: ToastsManager,
              public router: Router,
              private userService: UserApiService,
              public auth: AuthService) {
  }
  signUp() {
    this.isLogin = !this.isLogin;
  }
  register(email, firstName, lastName, password, passwordConfirm) {
    if (password === passwordConfirm) {
      this.auth.register({
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        confirmPassword: passwordConfirm
      })
        .subscribe(
          res => this.router.navigate(['home']),
          err => this.toast.error(err.json().error, err.json().error_description)
        );
    } else {
      this.toast.error('Паролі не співпадають');
    }
  }
  login(email: string, pass: string) {
    if (email && pass) {
      this.auth.login(email, pass).subscribe(res => {
        this.router.navigate(['home']);
      }, err => {
        err = err.json();
        this.toast.error('Не вірний пароль або логін');
      });
    }
  }
}
