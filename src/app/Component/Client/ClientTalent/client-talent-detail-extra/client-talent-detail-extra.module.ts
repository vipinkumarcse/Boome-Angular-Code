import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientTalentDetailExtraRoutingModule } from './client-talent-detail-extra-routing.module';
import { ClientTalentModuleModule } from '../client-talent-module/client-talent-module.module';
import { ClientTalentDetailExtraComponent } from './client-talent-detail-extra.component';


@NgModule({
  declarations: [ClientTalentDetailExtraComponent],
  imports: [
    CommonModule,
    ClientTalentDetailExtraRoutingModule,
    ClientTalentModuleModule
  ]
})
export class ClientTalentDetailExtraModule { }
