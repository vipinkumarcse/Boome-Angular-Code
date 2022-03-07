import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingDetailsRoutingModule } from './booking-details-routing.module';
import { BookingDetailsComponent } from '../booking-details.component';
import { TalentHeaderComponent } from '../../talent-header/talent-header.component';
import { TalentModuleModule } from '../../talent-module/talent-module.module';


@NgModule({
  declarations: [BookingDetailsComponent],
  imports: [
    CommonModule,
    BookingDetailsRoutingModule,
    TalentModuleModule
  ]
})
export class BookingDetailsModule { }
