import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrivacyPolidyComponent} from './privacy-polidy.component';
import { PrivacyPolidyRoutingModule } from './privacy-polidy-routing.module';
import { SettingsModuleModule } from '../settings-module/settings-module.module';


@NgModule({
  declarations: [PrivacyPolidyComponent],
  imports: [
    CommonModule,
    SettingsModuleModule,
    PrivacyPolidyRoutingModule
  ]
})
export class PrivacyPolidyModule { }
