import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalentSettingAboutUsRoutingModule } from './talent-setting-about-us-routing.module';
import { TalentSettingAboutUsComponent } from '../talent-setting-about-us.component';
import { TalentSettingsSidebarComponent } from '../../talent-settings-sidebar/talent-settings-sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TalentModuleModule } from '../../talent-module/talent-module.module';


@NgModule({
  declarations: [TalentSettingAboutUsComponent],
  imports: [
    CommonModule,
    TalentSettingAboutUsRoutingModule ,
    FormsModule,
    ReactiveFormsModule,
    TalentModuleModule
  ] , 
})
export class TalentSettingAboutUsModule { }
