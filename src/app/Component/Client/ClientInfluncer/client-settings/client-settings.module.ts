import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSettingsRoutingModule } from './client-settings-routing.module';
import { InfluncerModuleModule } from '../influncer-module/influncer-module.module';
import { ClientSettingsComponent } from './client-settings.component';


@NgModule({
  declarations: [ClientSettingsComponent],
  imports: [
    CommonModule,
    ClientSettingsRoutingModule,
    InfluncerModuleModule
  ]
})
export class ClientSettingsModule { }
