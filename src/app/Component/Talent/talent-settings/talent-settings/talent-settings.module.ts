import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalentSettingsRoutingModule } from './talent-settings-routing.module';
import { TalentSettingsComponent } from '../talent-settings.component';
import { TalentModuleModule } from '../../talent-module/talent-module.module';


@NgModule({
  declarations: [TalentSettingsComponent 
  ],
  imports: [
    CommonModule,
    TalentSettingsRoutingModule, 
    TalentModuleModule
  ]
})
export class TalentSettingsModule { }
