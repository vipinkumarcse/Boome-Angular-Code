import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientinfluncerRoutingModule } from './clientinfluncer-routing.module';
import { ClientinfluencerComponent } from './clientinfluencer.component';
import { InfluncerModuleModule } from '../influncer-module/influncer-module.module';


@NgModule({
  declarations: [ClientinfluencerComponent],
  imports: [
    CommonModule,
    ClientinfluncerRoutingModule,
    InfluncerModuleModule
  ]
})
export class ClientinfluncerModule { }
