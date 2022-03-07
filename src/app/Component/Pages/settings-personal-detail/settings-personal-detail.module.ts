import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsPersonalDetailComponent} from './settings-personal-detail.component';
import {SettingsPersonalDetailRoutingModule } from './settings-personal-detail-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsModuleModule } from '../settings-module/settings-module.module';


@NgModule({
  declarations: [SettingsPersonalDetailComponent],
  imports: [
    CommonModule,
    SettingsModuleModule,
    SettingsPersonalDetailRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SettingsPersonalDetailModule { }
