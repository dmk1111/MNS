import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastsManager } from 'ng2-toastr';

const styles   = require('./login.css');
const template = require('./login.html');
@Component({
  selector: 'login',
  template: template,
  styles: [ styles ]
})
export class Login {
  constructor(public toast: ToastsManager,
              public router: Router,
              public auth: AuthService) {
  }
  login(email: string, pass: string) {
    if (email && pass) {
      this.auth.login(email, pass).subscribe(res => {
        this.router.navigate(['home']);
      }, err => {
        err = err.json();
        this.toast.error(err.error, err.error_description);
      });
    }
  }
}
