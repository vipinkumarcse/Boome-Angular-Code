import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoaderAppComponent } from '../../appPages/loader-app/loader-app.component';
import { PrivacyPolicyAppComponent } from '../../appPages/privacy-policy-app/privacy-policy-app.component';
import { TermConditionAppComponent } from '../../appPages/term-condition-app/term-condition-app.component';
import { CommonLoginComponent } from '../../Auth/common-login/common-login.component';
import { ConnectSocialComponent } from '../../Auth/connect-social/connect-social.component';
import { CreateAccountComponent } from '../../Auth/create-account/create-account.component';
import { HomeComponent } from '../../Auth/home/home.component';
import { IdentityConfirmComponent } from '../../Auth/identity-confirm/identity-confirm.component';
import { IdentityVerificationComponent } from '../../Auth/identity-verification/identity-verification.component';
import { LoginComponent } from '../../Auth/login/login.component';
import { ResetPasswordComponent } from '../../Auth/reset-password/reset-password.component';
import { SignupRegisterComponent } from '../../Auth/signup-register/signup-register.component';
import { SignupComponent } from '../../Auth/signup/signup.component';
import { SettingsSocialDisconnectedComponent } from '../settings-social-disconnected/settings-social-disconnected.component';
// import {SettingsComponent} from './settings/settings.component';
// import {SettingsAboutUsComponent} from './settings-about-us/settings-about-us.component';


  const routes: Routes = [
   
  
    {
      path: 'payment-method',
      loadChildren: () => import('../settings-payment/settings-payment.module').then(m => m.SettingsPaymentModule)

    },
  
    {
      path: 'campaign',
      loadChildren: () => import('../campaign/campaign.module').then(m => m.CampaignModule)
    },
    {
      path: 'collaboration',
      loadChildren: () => import('../collaboration/collaboration.module').then(m => m.CollaborationModule)
    },
    {
      path: 'messaging',
      loadChildren: () => import('../messaging/messaging.module').then(m => m.MessagingModule)
    },
    {
      path: 'reviews',
      loadChildren: () => import('../review/review.module').then(m => m.ReviewModule)
    },
    {
      path: 'user-profile',
      loadChildren: () => import('../user-profile/user-profile.module').then(m => m.UserProfileModule)
    },
    {
      path: 'travelling-time',
      loadChildren: () => import('../travelling-time/travelling-time.module').then(m => m.TravellingTimeModule)
    },
    {
      path: 'privacy-policy',
      loadChildren: () => import('../privacy-polidy/privacy-polidy.module').then(m => m.PrivacyPolidyModule)
    },
    {
      path: 'settings-aboutUs',
      loadChildren: () => import('../settings-about-us/settings-about-us.module').then(m => m.SettingsAboutUsModule)
    },
    {
      path: 'settings-address',
      loadChildren: () => import('../settings-address-details/settings-address-details.module').then(m => m.SettingsAddressDetailsModule)
    },
    {
      path: 'settings-bank',
      loadChildren: () => import('../settings-bank-details/settings-bank-details.module').then(m => m.SettingsBankDetailsModule)
    },
    {
      path: 'settings-contact',
      loadChildren: () => import('../settings-contact-us/settings-contact-us.module').then(m => m.SettingsContactUsModule)
    },
    {
      path: 'settings-personal',
      loadChildren: () => import('../settings-personal-detail/settings-personal-detail.module').then(m => m.SettingsPersonalDetailModule)
    },
    {
      path: 'settings-social',
      loadChildren: () => import('../settings-social-account/settings-social-account.module').then(m => m.SettingsSocialAccountModule)
    },
    {
      path: 'settings',
      loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule)
    },
    {
      path: 'job-detail',
      loadChildren: () => import('../job-details/job-details.module').then(m => m.JobDetailsModule)
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
  imports: [
    RouterModule.forChild(routes)  ],
  exports: [RouterModule]
})
export class SettingsModuleRoutingModule { }
