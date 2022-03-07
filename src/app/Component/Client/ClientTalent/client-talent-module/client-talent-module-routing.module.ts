import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'client-talent-messages',
    loadChildren: () => import('../../../Client/ClientTalent/client-talent-message/client-talent-message.module').then(m => m.ClientTalentMessageModule)
  },
  {
    path: 'client-talent-bookings',
    loadChildren: () => import('../../../Client/ClientTalent/client-talent-bookings/client-talent-bookings.module').then(m => m.ClientTalentBookingsModule)
  },
  {
    path: 'client-talent-reviews',
    loadChildren: () => import('../../../Client/ClientTalent/client-talent-reviews/client-talent-reviews.module').then(m => m.ClientTalentReviewsModule)
  },
  {
    path: 'client-talent-settings',
    loadChildren: () => import('../../../Client/ClientTalent/client-talent-settings/client-talent-settings/client-talent-settings.module').then(m => m.ClientTalentSettingsModule)
  },
  {
    path: 'client-talent-details',
    loadChildren: () => import('../../../Client/ClientTalent/client-talent-detail/client-talent-detail.module').then(m => m.ClientTalentDetailModule)
  },
  {
    path: 'hire-talent',
    loadChildren: () => import('../../../Client/ClientTalent/hire-talent/hire-talent.module').then(m => m.HireTalentModule)
  },
  {path : 'hire-talent-payment' , 
  loadChildren: () => import('../../../Client/ClientTalent/hire-talent-payment/hire-talent-payment.module').then(m => m.HireTalentPaymentModule)},
  {path : 'client-booking-upcoming' , loadChildren: () => import('../../../Client/ClientTalent/client-booking-detail-upcoming/client-booking-detail-upcoming.module').then(m => m.ClientBookingDetailUpcomingModule)},
  {path : 'client-booking-ongoing' , loadChildren: () => import('../../../Client/ClientTalent/client-booking-detail-ongoing/client-booking-detail-ongoing.module').then(m => m.ClientBookingDetailOngoingModule)},
  {path : 'client-booking-completed' , loadChildren: () => import('../../../Client/ClientTalent/client-booking-detail-completed/client-booking-detail-completed.module').then(m => m.ClientBookingDetailCompletedModule)},
  {path : 'client-booking-rated' , loadChildren: () => import('../../../Client/ClientTalent/client-booking-detail-rated/client-booking-detail-rated.module').then(m => m.ClientBookingDetailRatedModule)},
  {path : 'client-talent-extra-details' , loadChildren: () => import('../../../Client/ClientTalent/client-talent-detail-extra/client-talent-detail-extra.module').then(m => m.ClientTalentDetailExtraModule)},
  {path : 'client-talent-profile' , loadChildren: () => import('../../../Client/ClientTalent/client-talent-profile/client-talent-profile.module').then(m => m.ClientTalentProfileModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientTalentModuleRoutingModule { }
