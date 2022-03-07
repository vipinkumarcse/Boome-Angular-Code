import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsContactUsComponent} from './settings-contact-us.component';
import { SettingsContactUsRoutingModule } from './settings-contact-us-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsModuleModule } from '../settings-module/settings-module.module';


@NgModule({
  declarations: [SettingsContactUsComponent],
  imports: [
    CommonModule,
    SettingsModuleModule,
    SettingsContactUsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SettingsContactUsModule { }
