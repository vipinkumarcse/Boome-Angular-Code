import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule,  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/Auth/home/home.component';
import { HomeBannerComponent } from './Component/Auth/home-banner/home-banner.component';
import { HomeAboutUsComponent } from './Component/Auth/home-about-us/home-about-us.component';
import { HomeFeaturesComponent } from './Component/Auth/home-features/home-features.component';
import { HomeContactUsComponent } from './Component/Auth/home-contact-us/home-contact-us.component';
import { HomeFooterComponent } from './Component/Auth/home-footer/home-footer.component';
import { LoginComponent } from './Component/Auth/login/login.component';
import { SignupComponent } from './Component/Auth/signup/signup.component';
import { SignupRegisterComponent } from './Component/Auth/signup-register/signup-register.component';
import { CreateAccountComponent } from './Component/Auth/create-account/create-account.component';
import { LeftSideSocialComponent } from './Component/Auth/left-side-social/left-side-social.component';
import { ConnectSocialComponent } from './Component/Auth/connect-social/connect-social.component';
// import { TalentHeaderComponent } from './Component/Talent/talent-header/talent-header.component';
// import { TalentComponent } from './Component/Talent/talent/talent.component';

// ==================Talent interface pages
import { TalentModuleModule } from './Component/Talent/talent-module/talent-module.module';
import { ClientModuleModule } from './Component/Client/client-module/client-module.module';
import { SettingsSocialDisconnectedComponent } from './Component/Pages/settings-social-disconnected/settings-social-disconnected.component';
import { IdentityVerificationComponent } from './Component/Auth/identity-verification/identity-verification.component';
import { IdentityConfirmComponent } from './Component/Auth/identity-confirm/identity-confirm.component';
import { ResetPasswordComponent } from './Component/Auth/reset-password/reset-password.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpinterceptorService } from './services/interceptor/httpinterceptor.service';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { CommonLoginComponent } from './Component/Auth/common-login/common-login.component';
import { ErrorInterceptor } from './services/interceptor/error.interceptor';
import { LoaderComponent } from './services/Common/loader/loader.component';
import { LoaderInterceptorService } from './services/interceptor/loader-interceptor.service';
import { LoaderService } from './services/Common/loader.service';
import { ToastrModule } from 'ngx-toastr';
import { MatNativeDateModule } from '@angular/material/core';
import { PrivacyPolicyAppComponent } from './Component/appPages/privacy-policy-app/privacy-policy-app.component';
import { TermConditionAppComponent } from './Component/appPages/term-condition-app/term-condition-app.component';
import { LoaderAppComponent } from './Component/appPages/loader-app/loader-app.component';
// import { LoaderAppComponent } from './Component/Auth/loader-app/loader-app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SettingsModuleModule } from './Component/Pages/settings-module/settings-module.module';
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

// ***************** Angular Firebase Module ***********************************

import { AngularFireModule } from '@angular/fire';
import {AngularFireMessagingModule} from '@angular/fire/messaging'
import {NotificationService} from './services/notification/notification.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeBannerComponent,
    HomeAboutUsComponent,
    HomeFeaturesComponent,
    HomeContactUsComponent,
    HomeFooterComponent,
    LoginComponent,
    SignupComponent,
    SignupRegisterComponent,
    CreateAccountComponent,
    LeftSideSocialComponent,
    ConnectSocialComponent,
    SettingsSocialDisconnectedComponent,
    IdentityVerificationComponent,
    IdentityConfirmComponent,
    ResetPasswordComponent,
    CommonLoginComponent,
    LoaderComponent,
    LoaderAppComponent,
    PrivacyPolicyAppComponent,
    TermConditionAppComponent ,
    // SettingsPaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TalentModuleModule,
    ClientModuleModule,
    //NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    Ng2TelInputModule,
    HttpClientModule,
    MatNativeDateModule,
    SettingsModuleModule ,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    // RatingModule,
    ToastrModule.forRoot(),
    NgbModule,
    // SocketIoModule
  ],
  providers: [
    DatePipe,
    LoaderService,
    NotificationService,
    // {provide: LocationStrategy, useClass: PathLocationStrategy},
    { provide: HTTP_INTERCEPTORS,useClass: HttpinterceptorService,multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true } ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
