import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ReviewsComponent } from '../reviews/reviews.component';
// import { BookingHistoryComponent } from '../booking-history/booking-history.component';
// import { TaskDetailComponent } from '../task-detail/task-detail.component';
// import { BookingDetailsOngoingComponent } from '../booking-details-ongoing/booking-details-ongoing.component';
// import { BookingDetailsCompletedComponent } from '../booking-details-completed/booking-details-completed.component';
// import { BookingDetailsComponent } from '../booking-details/booking-details.component'
// import { TalentProfileComponent } from '../talent-profile/talent-profile.component';
// import { TalentSettingsComponent } from '../talent-settings/talent-settings.component';
// import { TalentSettingPersonalDetailsComponent } from '../talent-setting-personal-details/talent-setting-personal-details.component';
// import { TalentSettingAboutUsComponent } from '../talent-setting-about-us/talent-setting-about-us.component';
// import { TalentSettingContactusComponent } from '../talent-setting-contactus/talent-setting-contactus.component';
// import { TalentPrivacyPolicyComponent } from '../talent-privacy-policy/talent-privacy-policy.component';
// import { RegisterTalentComponent } from '../register-talent/register-talent.component';
// import { CreateAccountTalentComponent } from '../create-account-talent/create-account-talent.component';
// import { RegisterDetailsTalentComponent } from '../register-details-talent/register-details-talent.component';
// import { ChoosePlanTalentComponent } from '../choose-plan-talent/choose-plan-talent.component';
// import { MessageComponent } from '../message/message.component';


const routes: Routes = [
  // { path: 'messages',  component: MessageComponent },
  // { path: 'review',  component: ReviewsComponent },
  // { path: 'bookings',  component: BookingHistoryComponent },
  // { path: 'task-detail',  component: TaskDetailComponent },
  // { path: 'booking-details',  component: BookingDetailsComponent },
  // { path: 'booking-detail-ongoing',  component: BookingDetailsOngoingComponent },
  // { path: 'booking-details-completed',  component: BookingDetailsCompletedComponent },
  // { path: 'talent-profile',  component: TalentProfileComponent },
  // { path: 'talent-settings',  component: TalentSettingsComponent },
  // { path: 'talent-settings-documents',  component: TalentSettingPersonalDetailsComponent },
  // { path: 'talent-settings-aboutus',  component: TalentSettingAboutUsComponent },
  // { path: 'talent-settings-contactus',  component: TalentSettingContactusComponent },
  // { path: 'talent-privacy-policy',  component: TalentPrivacyPolicyComponent },
  // { path: 'register-talent',  component: RegisterTalentComponent },
  // { path: 'create-account-talent',  component: CreateAccountTalentComponent },
  // { path: 'register-detail-talent',  component: RegisterDetailsTalentComponent },

  // { path: 'choose-plan-talent',  component: ChoosePlanTalentComponent },

  {
    path: 'messages',
    loadChildren: () => import('../message/message.module').then(m => m.MessageModule)
  },
  {
    path: 'review',
    loadChildren: () => import('../reviews/reviews/reviews.module').then(m => m.ReviewsModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('../booking-history/booking-history/booking-history.module').then(m => m.BookingHistoryModule)
  },
  {
    path: 'task-detail',
    loadChildren: () => import('../task-detail/task-detail/task-detail.module').then(m => m.TaskDetailModule)
  },
  {
    path: 'booking-details',
    loadChildren: () => import('../booking-details/booking-details/booking-details.module').then(m => m.BookingDetailsModule)
  },
  {
    path: 'booking-detail-ongoing',
    loadChildren: () => import('../booking-details-ongoing/booking-details-ongoing/booking-details-ongoing.module').then(m => m.BookingDetailsOngoingModule)
  },
  {
    path: 'booking-details-completed',
    loadChildren: () => import('../booking-details-completed/booking-details-completed/booking-details-completed.module').then(m => m.BookingDetailsCompletedModule)
  },
  {
    path: 'talent-profile',
    loadChildren: () => import('../talent-profile/talent-profile/talent-profile.module').then(m => m.TalentProfileModule)
  },
  {
    path: 'talent-settings',
    loadChildren: () => import('../talent-settings/talent-settings/talent-settings.module').then(m => m.TalentSettingsModule)
  },
  {
    path: 'talent-settings-documents',
    loadChildren: () => import('../talent-setting-personal-details/talent-setting-personal-details/talent-setting-personal-details.module').then(m => m.TalentSettingPersonalDetailsModule)
  },
  {
    path: 'talent-settings-aboutus',
    loadChildren: () => import('../talent-setting-about-us/talent-setting-about-us/talent-setting-about-us.module').then(m => m.TalentSettingAboutUsModule)
  },
  {
    path: 'talent-settings-contactus',
    loadChildren: () => import('../talent-setting-contactus/talent-setting-contactus/talent-setting-contactus.module').then(m => m.TalentSettingContactusModule)
  },
  {
    path: 'talent-privacy-policy',
    loadChildren: () => import('../talent-privacy-policy/talent-privacy-policy/talent-privacy-policy.module').then(m => m.TalentPrivacyPolicyModule)
  },
  {
    path: 'register-talent',
    loadChildren: () => import('../register-talent/register-talent/register-talent.module').then(m => m.RegisterTalentModule)
  },
  {
    path: 'create-account-talent',
    loadChildren: () => import('../create-account-talent/create-account-talent/create-account-talent.module').then(m => m.CreateAccountTalentModule)
  },
  {
    path: 'register-detail-talent',
    loadChildren: () => import('../register-details-talent/register-details-talent/register-details-talent.module').then(m => m.RegisterDetailsTalentModule)
  },
  {
    path: 'choose-plan-talent',
    loadChildren: () => import('../choose-plan-talent/choose-plan-talent/choose-plan-talent.module').then(m => m.ChoosePlanTalentModule)
  },


 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentModuleRoutingModule { }
