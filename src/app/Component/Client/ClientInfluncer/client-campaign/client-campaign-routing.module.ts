import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCampaignComponent } from './client-campaign.component';

const routes: Routes = [
  {
    path: '',
    component: ClientCampaignComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientCampaignRoutingModule { }
