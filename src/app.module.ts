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
import { HolidaysComponent } from './home/component/holidays/holidays.component';
import { FiredComponent } from './home/component/fired/fired.component';
import { PremiumFinesComponent } from './home/component/premiumFines/premiumFines.component';
import { PromotionComponent } from './home/component/promotions/promotions.component';
import { DocumentComponent } from './home/component/document/documanet.component';
import { FileService } from './services/file.service';
import { SpinnerComponent } from './home/component/spinner/spinner.component';
import { DeleteStaffComponent } from './home/component/deletedStaff/deleted.staff';
import { RegionComponent } from './home/region/region.comp';
import { BusyModule } from 'angular2-busy';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { UsersComponent } from './home/users/users.component';
import { EditUserModal } from './home/users/editUserModal/editUserComponent';
import { SelectModule } from 'angular2-select';
import { MaterialModule } from '@angular/material';
import { PositionService } from './services/position.service';
import { PositionComponent } from './home/position/position.compoennt';
import { PositionModal } from './home/position/positionEditModal/positionEdit.component';
import { CreateStaffModal } from './home/staff/staffCreateModal/staffCreateModal.component';
import { HospitalsComponent } from './home/component/hospitals/hostital.component';
@NgModule({
  bootstrap: [App],
  declarations: [
    Home,
    Login,
    App,
    StaffListComponent,
    UsersComponent,
    StaffEditModalComponent,
    BaseStaffComponent,
    EditUserModal,
    EducationStaffComponent,
    OtherStaffComponent,
    PositionComponent,
    PositionModal,
    WorkExperienceComponent,
    BenefitsComponent,
    HolidaysComponent,
    FiredComponent,
    PremiumFinesComponent,
    PromotionComponent,
    DocumentComponent,
    CreateStaffModal,
    SpinnerComponent,
    HospitalsComponent,
    DeleteStaffComponent,
    RegionComponent
  ],
  imports: [
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'success' // set defaults here
    }),
    BusyModule,
    ToastModule.forRoot(),
    SelectModule,
    Angular2DataTableModule,
    StoreModule.provideStore({
      staff: staffReducer,
      updateStaff: staffUpdateReducer
    }),
    MaterialModule,
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
    PositionService,
    OtherService,
    PremiumFineService,
    PromotionService,
    ReportsService,
    StaffDocumentsSevice,
    StaffPersonalSerivce,
    StaffPhotoService,
    WorkExperienceService,
    UserApiService,
    FileService,
    AuthGuard, ...AUTH_PROVIDERS,
    {provide: BrowserXhr, useClass: CustomBrowserXhr}
  ]
})
export class AppModule {}
