import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientBookingDetailUpcomingRoutingModule } from './client-booking-detail-upcoming-routing.module';
import { ClientTalentModuleModule } from '../client-talent-module/client-talent-module.module';
import { ClientBookingDetailUpcomingComponent } from './client-booking-detail-upcoming.component';


@NgModule({
  declarations: [ClientBookingDetailUpcomingComponent],
  imports: [
    CommonModule,
    ClientBookingDetailUpcomingRoutingModule,
    ClientTalentModuleModule
  ]
})
export class ClientBookingDetailUpcomingModule { }
