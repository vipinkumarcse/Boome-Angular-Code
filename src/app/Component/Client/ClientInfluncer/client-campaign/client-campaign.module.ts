import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientCampaignRoutingModule } from './client-campaign-routing.module';
import { ClientCampaignComponent } from './client-campaign.component';
import { InfluncerModuleModule } from '../influncer-module/influncer-module.module';


@NgModule({
  declarations: [ClientCampaignComponent],
  imports: [
    CommonModule,
    ClientCampaignRoutingModule,
    InfluncerModuleModule
  ]
})
export class ClientCampaignModule { }
