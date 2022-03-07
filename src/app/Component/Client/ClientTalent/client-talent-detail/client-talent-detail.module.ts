import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientTalentDetailRoutingModule } from './client-talent-detail-routing.module';
import { ClientTalentModuleModule } from '../client-talent-module/client-talent-module.module';
import { ClientTalentDetailComponent } from './client-talent-detail.component';


@NgModule({
  declarations: [ClientTalentDetailComponent],
  imports: [
    CommonModule,
    ClientTalentDetailRoutingModule,
    ClientTalentModuleModule
  ]
})
export class ClientTalentDetailModule { }
