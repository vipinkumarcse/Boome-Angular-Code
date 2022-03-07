import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientJobRequestRoutingModule } from './client-job-request-routing.module';
import { ClientJobRequestComponent } from './client-job-request.component';
import { InfluncerModuleModule } from '../influncer-module/influncer-module.module';


@NgModule({
  declarations: [ClientJobRequestComponent],
  imports: [
    CommonModule,
    ClientJobRequestRoutingModule,
    InfluncerModuleModule
  ]
})
export class ClientJobRequestModule { }
