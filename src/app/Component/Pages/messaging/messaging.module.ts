import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessagingComponent} from './messaging.component';
import { MessagingRoutingModule } from './messaging-routing.module';
import { SettingsModuleModule } from '../settings-module/settings-module.module';

@NgModule({
  declarations: [MessagingComponent],
  imports: [
    CommonModule,
    SettingsModuleModule,
    MessagingRoutingModule
  ]
})
export class MessagingModule { }
