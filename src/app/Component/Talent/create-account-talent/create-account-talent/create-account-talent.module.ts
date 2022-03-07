import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAccountTalentRoutingModule } from './create-account-talent-routing.module';
import { CreateAccountTalentComponent } from '../create-account-talent.component';
import { LeftSocialTalentComponent } from '../../left-social-talent/left-social-talent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TalentModuleModule } from '../../talent-module/talent-module.module';


@NgModule({
  declarations: [CreateAccountTalentComponent
  ],
  imports: [
    CommonModule,
    CreateAccountTalentRoutingModule ,
    FormsModule,
    ReactiveFormsModule , 
    TalentModuleModule
  ], 

})
export class CreateAccountTalentModule { }
