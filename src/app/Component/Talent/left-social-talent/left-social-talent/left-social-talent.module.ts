import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftSocialTalentRoutingModule } from './left-social-talent-routing.module';
import { LeftSocialTalentComponent } from '../left-social-talent.component';
import { TalentModuleModule } from '../../talent-module/talent-module.module';


@NgModule({
  declarations: [LeftSocialTalentComponent],
  imports: [
    CommonModule,
    LeftSocialTalentRoutingModule , 
    TalentModuleModule
  ]
})
export class LeftSocialTalentModule { }
