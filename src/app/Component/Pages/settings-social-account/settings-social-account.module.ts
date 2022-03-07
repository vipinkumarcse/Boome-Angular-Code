import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsSocialAccountComponent} from './settings-social-account.component';
import { SettingsSocialAccountRoutingModule } from './settings-social-account-routing.module';
import { SettingsModuleModule } from '../settings-module/settings-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SettingsSocialAccountComponent],
  imports: [
    CommonModule,
    SettingsModuleModule,
    SettingsSocialAccountRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SettingsSocialAccountModule { }
