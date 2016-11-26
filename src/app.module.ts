import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule, BrowserXhr } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AuthGuard } from './common/auth.guard';
import { Home } from './home';
import { Login } from './login';
import { App } from './app';

import { routes } from './app.routes';
import { AuthService } from './services/auth.service';
import { UserApiService } from './services/user.service';
import { ToastModule } from 'ng2-toastr';
import { MaterialModule } from '@angular/material';
import { API_HTTP_PROVIDERS } from './services/http/apiHttp.service';
import { CustomBrowserXhr } from './services/http/CustomXHR';
import { Angular2DataTableModule } from 'angular2-data-table';
import { StaffListComponent } from './home/staff/staffList';
import { StaffEditModalComponent } from './home/staff/staffEditModal/staffEditModal';

@NgModule({
  bootstrap: [App],
  declarations: [
    Home, Login, App, StaffListComponent, StaffEditModalComponent
  ],
  imports: [
    ToastModule,
    Angular2DataTableModule,
    MaterialModule.forRoot(),
    HttpModule, BrowserModule, FormsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [
    API_HTTP_PROVIDERS,
    AuthService,
    UserApiService,
    AuthGuard, ...AUTH_PROVIDERS,
    {provide: BrowserXhr, useClass: CustomBrowserXhr}
  ]
})
export class AppModule {}
