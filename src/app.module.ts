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
import { BaseStaffComponent } from './home/component/base-staff/base.staff.component';
import { staffReducer } from './reducers/staff.reducer';
import { StoreModule } from '@ngrx/store';
import { StaffAction } from './action/staff.action';
import { WorkExperienceService } from './services/work.experience.service';
import { StaffPhotoService } from './services/staffphoto.service';
import { StaffPersonalSerivce } from './services/staffpersonal.service';
import { StaffDocumentsSevice } from './services/staff.documents.service';
import { ReportsService } from './services/reports.service';
import { PromotionService } from './services/promotion.service';
import { PremiumFineService } from './services/premium.fine.service';
import { OtherService } from './services/other.service';
import { HospitalService } from './services/hospital.service';
import { HolidaysService } from './services/holidays.service';
import { FiredService } from './services/fired.service';
import { EducationService } from './services/education.service';
import { BenefitsService } from './services/benefits.service';
import  EducationStaffComponent  from './home/component/education-staff/education.staff.component';
import OtherStaffComponent from "./home/component/other-staff/other.staff.component";
import { staffUpdateReducer } from './reducers/updateStaff.reducer';
import WorkExperienceComponent from "./home/component/work-experience/work.experience.component";
import {BenefitsComponent} from "./home/component/benefits-staff/benefits.component";

@NgModule({
  bootstrap: [App],
  declarations: [
    Home,
    Login,
    App,
    StaffListComponent,
    StaffEditModalComponent,
    BaseStaffComponent,
    EducationStaffComponent,
    OtherStaffComponent,
    WorkExperienceComponent,
    BenefitsComponent
  ],
  imports: [
    ToastModule,
    Angular2DataTableModule,
    StoreModule.provideStore({
      staff: staffReducer,
      updateStaff: staffUpdateReducer
    }),
    MaterialModule.forRoot(),
    HttpModule, BrowserModule, FormsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [
    API_HTTP_PROVIDERS,
    AuthService,
    StaffAction,
    BenefitsService,
    EducationService,
    FiredService,
    HolidaysService,
    HospitalService,
    OtherService,
    PremiumFineService,
    PromotionService,
    ReportsService,
    StaffDocumentsSevice,
    StaffPersonalSerivce,
    StaffPhotoService,
    WorkExperienceService,
    UserApiService,
    AuthGuard, ...AUTH_PROVIDERS,
    {provide: BrowserXhr, useClass: CustomBrowserXhr}
  ]
})
export class AppModule {}
