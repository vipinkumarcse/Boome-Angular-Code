import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientTalentMessageRoutingModule } from './client-talent-message-routing.module';
import { ClientTalentMessageComponent } from './client-talent-message.component';
import { ClientTalentModuleModule } from '../client-talent-module/client-talent-module.module';


@NgModule({
  declarations: [ClientTalentMessageComponent],
  imports: [
    CommonModule,
    ClientTalentMessageRoutingModule,
    ClientTalentModuleModule
  ]
})
export class ClientTalentMessageModule { }
