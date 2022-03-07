import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsBankDetailsComponent} from './settings-bank-details.component';
import { SettingsBankDetailsRoutingModule } from './settings-bank-details-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsModuleModule } from '../settings-module/settings-module.module';


@NgModule({
  declarations: [SettingsBankDetailsComponent],
  imports: [
    CommonModule,
    SettingsModuleModule,
    SettingsBankDetailsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SettingsBankDetailsModule { }
