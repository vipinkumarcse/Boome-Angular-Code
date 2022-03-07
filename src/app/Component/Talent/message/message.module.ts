import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';

import {MessageComponent} from './message.component';
import { TalentHeaderComponent } from '../talent-header/talent-header.component';
import { TalentModuleModule } from '../talent-module/talent-module.module';


@NgModule({
  declarations: [MessageComponent
  ],
  imports: [
    CommonModule,
    MessageRoutingModule,
    TalentModuleModule
  ], 

})
export class MessageModule { }
