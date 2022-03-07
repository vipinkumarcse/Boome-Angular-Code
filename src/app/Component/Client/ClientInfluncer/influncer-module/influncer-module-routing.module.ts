import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientInfluncerDetailsComponent } from '../client-influncer-details/client-influncer-details.component';
import { ClientInfluncerMessageComponent } from '../client-influncer-message/client-influncer-message.component';

const routes: Routes = [
  {
    path: 'client-job-requests/:id',
    loadChildren: () => import('../../../Client/ClientInfluncer/client-job-request/client-job-request.module').then(m => m.ClientJobRequestModule)
  },
  {
    path: 'client-campaign/:id',
    loadChildren: () => import('../../../Client/ClientInfluncer/client-campaign/client-campaign.module').then(m => m.ClientCampaignModule)
  },
  {
    path: 'add-campaign',
    loadChildren: () => import('../../../Client/ClientInfluncer/add-campaign/add-campaign.module').then(m => m.AddCampaignModule)
  },
  {
    path: 'clientInfluncer',
    loadChildren: () => import('../../../Client/ClientInfluncer/clientinfluencer/clientinfluncer.module').then(m => m.ClientinfluncerModule)
  },
  {
    path: 'client-influncer-profile',
    loadChildren: () => import('../../../Client/ClientInfluncer/client-influncer-profile/client-influncer-profile.module').then(m => m.ClientInfluncerProfileModule)
  },
  {
    path: 'client-settings',
    loadChildren: () => import('../../../Client/ClientInfluncer/client-settings/client-settings.module').then(m => m.ClientSettingsModule)
  },
  {
    path: 'client-edit-social',
    loadChildren: () => import('../../../Client/ClientInfluncer/client-edit-social/client-edit-social.module').then(m => m.ClientEditSocialModule)
  },
  {
    path: 'client-privacy-policy',
    loadChildren: () => import('../../../Client/ClientInfluncer/client-privacy-policy/client-privacy-policy.module').then(m => m.ClientPrivacyPolicyModule)
  },
 {
    path: 'client-influncer-history',
    loadChildren: () => import('../../../Client/ClientInfluncer/client-influncer-history/client-influncer-history.module').then(m => m.ClientInfluncerHistoryModule)
  },
  {
    path: 'client-contactus',
    loadChildren: () => import('../../../Client/ClientInfluncer/client-contactus/client-contactus.module').then(m => m.ClientContactusModule)
  },
  {
    path: 'client-history-upcoming/:id',
    loadChildren: () => import('../../../Client/ClientInfluncer/client-history-upcoming/client-history-upcoming.module').then(m => m.ClientHistoryUpcomingModule)
  },
  {
    path: 'client-history-completed/:id',
    loadChildren: () => import('../../../Client/ClientInfluncer/client-history-completed/client-history-completed.module').then(m => m.ClientHistoryCompletedModule)
  },
  {
    path: 'client-history-ongoing/:id',
    loadChildren: () => import('../../../Client/ClientInfluncer/client-history-ongoing/client-history-ongoing.module').then(m => m.ClientHistoryOngoingModule)
  },
  {
    path: 'client-influncer-reviews',
    loadChildren: () => import('../../../Client/ClientInfluncer/client-influncer-reviews/client-influncer-reviews.module').then(m => m.ClientInfluncerReviewsModule)
  },
  {
    path: 'client-aboutus',
    loadChildren: () => import('../../../Client/ClientInfluncer/client-aboutus/client-aboutus.module').then(m => m.ClientAboutusModule)
  },
  {
    path: 'client-influncer-message',
    loadChildren: () => import('../../../Client/ClientInfluncer/client-influncer-message/client-influncer-message.module').then(m => m.ClientInfluncerMessageModule)
  },
  // { path: 'client-influncer-message', component: ClientInfluncerMessageComponent },
  { path: 'client-influncer-details', component: ClientInfluncerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfluncerModuleRoutingModule { }
