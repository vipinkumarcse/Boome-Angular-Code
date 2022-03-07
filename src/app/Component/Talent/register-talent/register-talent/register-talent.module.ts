import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterTalentRoutingModule } from './register-talent-routing.module';
import { RegisterTalentComponent } from '../register-talent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { LeftSocialTalentComponent } from '../../left-social-talent/left-social-talent.component';
import { TalentModuleModule } from '../../talent-module/talent-module.module';


@NgModule({
  declarations: [RegisterTalentComponent ],
  imports: [
    CommonModule,
    RegisterTalentRoutingModule ,
    FormsModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    NgbModule,
    TalentModuleModule
  ],

})
export class RegisterTalentModule { }
