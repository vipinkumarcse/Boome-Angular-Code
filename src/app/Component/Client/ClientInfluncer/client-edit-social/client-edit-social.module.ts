import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientEditSocialRoutingModule } from './client-edit-social-routing.module';
import { ClientEditSocialComponent } from './client-edit-social.component';
import { InfluncerModuleModule } from '../influncer-module/influncer-module.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ClientEditSocialComponent],
  imports: [
    CommonModule,
    ClientEditSocialRoutingModule,
    InfluncerModuleModule,
    ReactiveFormsModule,
  ]
})
export class ClientEditSocialModule { }
