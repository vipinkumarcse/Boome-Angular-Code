import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPaymentRoutingModule } from './settings-payment-routing.module';
import { SettingsPaymentComponent } from './settings-payment.component';
import { SettingsModuleModule } from '../settings-module/settings-module.module';


@NgModule({
  declarations: [SettingsPaymentComponent],
  imports: [
    CommonModule,
    SettingsModuleModule,
    SettingsPaymentRoutingModule
  ]
})
export class SettingsPaymentModule { }
