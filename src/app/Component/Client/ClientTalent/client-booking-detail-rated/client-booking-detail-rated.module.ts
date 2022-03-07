import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientBookingDetailRatedRoutingModule } from './client-booking-detail-rated-routing.module';
import { ClientTalentModuleModule } from '../client-talent-module/client-talent-module.module';
import { ClientBookingDetailRatedComponent } from './client-booking-detail-rated.component';


@NgModule({
  declarations: [ClientBookingDetailRatedComponent],
  imports: [
    CommonModule,
    ClientBookingDetailRatedRoutingModule,
    ClientTalentModuleModule
  ]
})
export class ClientBookingDetailRatedModule { }
