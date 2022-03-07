import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientInfluncerHistoryRoutingModule } from './client-influncer-history-routing.module';
import { ClientInfluncerHistoryComponent } from './client-influncer-history.component';
import { InfluncerModuleModule } from '../influncer-module/influncer-module.module';


@NgModule({
  declarations: [ClientInfluncerHistoryComponent],
  imports: [
    CommonModule,
    ClientInfluncerHistoryRoutingModule,
    InfluncerModuleModule
  ]
})
export class ClientInfluncerHistoryModule { }
