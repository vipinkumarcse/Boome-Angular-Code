import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsAboutUsComponent} from './settings-about-us.component';
import { SettingsAboutUsRoutingModule } from './settings-about-us-routing.module';
import { SettingsModuleModule } from '../settings-module/settings-module.module';


@NgModule({
  declarations: [SettingsAboutUsComponent],
  imports: [
    CommonModule,
    SettingsModuleModule,
    SettingsAboutUsRoutingModule
  ]
})
export class SettingsAboutUsModule { }
