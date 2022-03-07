import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCampaignRoutingModule } from './add-campaign-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddCampaignComponent } from './add-campaign.component';
import { InfluncerModuleModule } from '../influncer-module/influncer-module.module';
import { AddCampaignPostComponent } from '../add-campaign-post/add-campaign-post.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [AddCampaignComponent, AddCampaignPostComponent],
  imports: [
    CommonModule,
    AddCampaignRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    InfluncerModuleModule,
    AngularEditorModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  exports:[AddCampaignPostComponent]
})
export class AddCampaignModule { }
