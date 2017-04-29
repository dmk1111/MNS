import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

const template = require('./app.html');

@Component({
  selector: 'auth-app',
  template: template
})

export class App {
  constructor(public router: Router, public toastr: ToastsManager, vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
  }
}
