import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Component/Auth/home/home.component';
import {LoginComponent} from './Component/Auth/login/login.component';
import {SignupComponent} from './Component/Auth/signup/signup.component';
import {SignupRegisterComponent} from './Component/Auth/signup-register/signup-register.component';
import {CreateAccountComponent} from './Component/Auth/create-account/create-account.component';
import {ConnectSocialComponent} from './Component/Auth/connect-social/connect-social.component';
import {SettingsSocialDisconnectedComponent} from './Component/Pages/settings-social-disconnected/settings-social-disconnected.component';
import {IdentityVerificationComponent} from './Component/Auth/identity-verification/identity-verification.component';
import {IdentityConfirmComponent} from './Component/Auth/identity-confirm/identity-confirm.component';
import { ResetPasswordComponent } from './Component/Auth/reset-password/reset-password.component';
import { CommonLoginComponent } from './Component/Auth/common-login/common-login.component';
import { LoaderAppComponent } from './Component/appPages/loader-app/loader-app.component';
import { PrivacyPolicyAppComponent } from './Component/appPages/privacy-policy-app/privacy-policy-app.component';
import { TermConditionAppComponent } from './Component/appPages/term-condition-app/term-condition-app.component';

// ==========Talent interface pages===========



const routes: Routes = [
  {path : '' , component:HomeComponent},
  {path : 'login/:id' , component:LoginComponent},
  {path : 'signup' , component:SignupComponent},
  {path : 'signup-register' , component:SignupRegisterComponent},
  {path : 'create-account' , component:CreateAccountComponent},
  {path : 'connect' , component:ConnectSocialComponent},
  {path : 'settings-social-account-disconnected' , component:SettingsSocialDisconnectedComponent},
  {path : 'identity-verification' , component:IdentityVerificationComponent},
  {path : 'identity-verify' , component:IdentityConfirmComponent},
  {path : 'reset-password' , component:ResetPasswordComponent},
  {path : 'selectRole' , component:CommonLoginComponent},
  // {path : 'payment-method' , component:SettingsPaymentComponent},

  {
    path: 'talent',
    loadChildren: () => import('./Component/Talent/talent/talent.module').then(m => m.TalentModule)
  },
  {
    path: 'loading',
     component:LoaderAppComponent
  },
  {
    path: 'privacyPolicy',
     component:PrivacyPolicyAppComponent
  },
  {
    path: 'terms',
     component:TermConditionAppComponent
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
