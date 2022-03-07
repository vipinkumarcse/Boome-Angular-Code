import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientPrivacyPolicyRoutingModule } from './client-privacy-policy-routing.module';
import { ClientPrivacyPolicyComponent } from './client-privacy-policy.component';
import { InfluncerModuleModule } from '../influncer-module/influncer-module.module';


@NgModule({
  declarations: [ClientPrivacyPolicyComponent],
  imports: [
    CommonModule,
    ClientPrivacyPolicyRoutingModule,
    InfluncerModuleModule
  ]
})
export class ClientPrivacyPolicyModule { }
