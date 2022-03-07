import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChoosePlanTalentRoutingModule } from './choose-plan-talent-routing.module';
import { ChoosePlanTalentComponent } from '../choose-plan-talent.component';
import { LeftSocialTalentComponent } from '../../left-social-talent/left-social-talent.component';
import { TalentModuleModule } from '../../talent-module/talent-module.module';


@NgModule({
  declarations: [ChoosePlanTalentComponent],
  imports: [
    CommonModule,
    ChoosePlanTalentRoutingModule , 
    TalentModuleModule
  ],

})
export class ChoosePlanTalentModule { }
