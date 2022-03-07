import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalentPrivacyPolicyRoutingModule } from './talent-privacy-policy-routing.module';
import { TalentPrivacyPolicyComponent } from '../talent-privacy-policy.component';
import { TalentHeaderComponent } from '../../talent-header/talent-header.component';
import { TalentModuleModule } from '../../talent-module/talent-module.module';


@NgModule({
  declarations: [TalentPrivacyPolicyComponent 
  ],
  imports: [
    CommonModule,
    TalentPrivacyPolicyRoutingModule, 
    TalentModuleModule
  ] ,
})
export class TalentPrivacyPolicyModule { }
