import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientHistoryCompletedRoutingModule } from './client-history-completed-routing.module';
import { InfluncerModuleModule } from '../influncer-module/influncer-module.module';
import { ClientHistoryCompletedComponent } from './client-history-completed.component';


@NgModule({
  declarations: [ClientHistoryCompletedComponent],
  imports: [
    CommonModule,
    ClientHistoryCompletedRoutingModule,
    InfluncerModuleModule
  ]
})
export class ClientHistoryCompletedModule { }
