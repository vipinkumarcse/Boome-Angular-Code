import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientContactusRoutingModule } from './client-contactus-routing.module';
import { ClientContactusComponent } from './client-contactus.component';
import { InfluncerModuleModule } from '../influncer-module/influncer-module.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ClientContactusComponent],
  imports: [
    CommonModule,
    ClientContactusRoutingModule,
    InfluncerModuleModule,
    ReactiveFormsModule,
  ]
})
export class ClientContactusModule { }
