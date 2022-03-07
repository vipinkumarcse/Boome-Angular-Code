import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientAboutusRoutingModule } from './client-aboutus-routing.module';
import { ClientAboutusComponent } from './client-aboutus.component';
import { InfluncerModuleModule } from '../influncer-module/influncer-module.module';


@NgModule({
  declarations: [ClientAboutusComponent],
  imports: [
    CommonModule,
    ClientAboutusRoutingModule,
    InfluncerModuleModule
  ]
})
export class ClientAboutusModule { }
