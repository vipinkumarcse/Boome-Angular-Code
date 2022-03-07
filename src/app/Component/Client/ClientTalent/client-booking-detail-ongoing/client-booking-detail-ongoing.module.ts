import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientBookingDetailOngoingRoutingModule } from './client-booking-detail-ongoing-routing.module';
import { ClientTalentModuleModule } from '../client-talent-module/client-talent-module.module';
import { ClientBookingDetailOngoingComponent } from './client-booking-detail-ongoing.component';


@NgModule({
  declarations: [ClientBookingDetailOngoingComponent],
  imports: [
    CommonModule,
    ClientBookingDetailOngoingRoutingModule,
    ClientTalentModuleModule
  ]
})
export class ClientBookingDetailOngoingModule { }
