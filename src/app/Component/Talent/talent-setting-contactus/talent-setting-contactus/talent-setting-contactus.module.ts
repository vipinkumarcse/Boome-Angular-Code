import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalentSettingContactusRoutingModule } from './talent-setting-contactus-routing.module';
import { TalentSettingContactusComponent } from '../talent-setting-contactus.component';
import { TalentSettingsSidebarComponent } from '../../talent-settings-sidebar/talent-settings-sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TalentModuleModule } from '../../talent-module/talent-module.module';


@NgModule({
  declarations: [TalentSettingContactusComponent ],
  imports: [
    CommonModule,
    TalentSettingContactusRoutingModule , 
    FormsModule,
    ReactiveFormsModule,
    TalentModuleModule
  ],
})
export class TalentSettingContactusModule { }
