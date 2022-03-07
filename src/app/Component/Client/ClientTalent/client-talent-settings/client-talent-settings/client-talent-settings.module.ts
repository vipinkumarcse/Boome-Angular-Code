import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientTalentSettingsRoutingModule } from './client-talent-settings-routing.module';
import { ClientTalentSettingsComponent } from '../client-talent-settings.component';
import { ClientTalentModuleModule } from '../../client-talent-module/client-talent-module.module';


@NgModule({
  declarations: [ClientTalentSettingsComponent],
  imports: [
    CommonModule,
    ClientTalentSettingsRoutingModule,
    ClientTalentModuleModule
  ]
})
export class ClientTalentSettingsModule { }
