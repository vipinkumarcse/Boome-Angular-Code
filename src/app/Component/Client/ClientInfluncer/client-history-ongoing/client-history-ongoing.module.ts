import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientHistoryOngoingRoutingModule } from './client-history-ongoing-routing.module';
import { InfluncerModuleModule } from '../influncer-module/influncer-module.module';
import { ClientHistoryOngoingComponent } from './client-history-ongoing.component';


@NgModule({
  declarations: [ClientHistoryOngoingComponent],
  imports: [
    CommonModule,
    ClientHistoryOngoingRoutingModule,
    InfluncerModuleModule
  ]
})
export class ClientHistoryOngoingModule { }
