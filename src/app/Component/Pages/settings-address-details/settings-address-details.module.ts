import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsAddressDetailsComponent} from '../settings-address-details/settings-address-details.component';
import { SettingsAddressDetailsRoutingModule } from './settings-address-details-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsModuleModule } from '../settings-module/settings-module.module';


@NgModule({
  declarations: [SettingsAddressDetailsComponent],
  imports: [
    CommonModule,
    SettingsModuleModule,
    SettingsAddressDetailsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SettingsAddressDetailsModule { }
