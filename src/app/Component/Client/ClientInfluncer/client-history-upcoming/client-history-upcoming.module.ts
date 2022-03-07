import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientHistoryUpcomingRoutingModule } from './client-history-upcoming-routing.module';
import { ClientHistoryUpcomingComponent } from './client-history-upcoming.component';
import { InfluncerModuleModule } from '../influncer-module/influncer-module.module';


@NgModule({
  declarations: [ClientHistoryUpcomingComponent],
  imports: [
    CommonModule,
    ClientHistoryUpcomingRoutingModule,
    InfluncerModuleModule
  ]
})
export class ClientHistoryUpcomingModule { }
