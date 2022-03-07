import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterDetailsTalentRoutingModule } from './register-details-talent-routing.module';
import { RegisterDetailsTalentComponent } from '../register-details-talent.component';
import { LeftSocialTalentComponent } from '../../left-social-talent/left-social-talent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TalentModuleModule } from '../../talent-module/talent-module.module';


@NgModule({
  declarations: [RegisterDetailsTalentComponent
  ],
  imports: [
    CommonModule,
    RegisterDetailsTalentRoutingModule ,
    FormsModule,
    ReactiveFormsModule,
    TalentModuleModule
    
  ] 

})
export class RegisterDetailsTalentModule { }
