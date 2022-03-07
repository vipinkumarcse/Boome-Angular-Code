import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingDetailsOngoingRoutingModule } from './booking-details-ongoing-routing.module';
import { BookingDetailsOngoingComponent } from '../booking-details-ongoing.component';
import { TalentHeaderComponent } from '../../talent-header/talent-header.component';
import { TalentModuleModule } from '../../talent-module/talent-module.module';


@NgModule({
  declarations: [BookingDetailsOngoingComponent],
  imports: [
    CommonModule,
    BookingDetailsOngoingRoutingModule , 
    TalentModuleModule
  ]
})
export class BookingDetailsOngoingModule { }
