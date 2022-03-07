import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingHistoryRoutingModule } from './booking-history-routing.module';
import { BookingHistoryComponent } from '../booking-history.component';
import { TalentHeaderComponent } from '../../talent-header/talent-header.component';
import { TalentModuleModule } from '../../talent-module/talent-module.module';


@NgModule({
  declarations: [BookingHistoryComponent],
  imports: [
    CommonModule,
    BookingHistoryRoutingModule ,
    TalentModuleModule
  ],

})
export class BookingHistoryModule { }
