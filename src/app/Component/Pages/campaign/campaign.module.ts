import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignRoutingModule } from './campaign-routing.module';
import {CampaignComponent} from './campaign.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SettingsModuleModule } from '../settings-module/settings-module.module';
import {NumberComponent} from './number.pipe'


@NgModule({
  declarations: [CampaignComponent, NumberComponent],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    SettingsModuleModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CampaignModule { }
