import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TalentComponent} from './talent.component'
import { TalentRoutingModule } from './talent-routing.module';
import { TalentModuleModule } from '../talent-module/talent-module.module';
import { FormsModule } from '@angular/forms';
import { TalentHeaderComponent } from '../talent-header/talent-header.component';
import { TalentTopbarComponent } from '../talent-topbar/talent-topbar.component';


@NgModule({ 
  declarations: [TalentComponent ],
  imports: [
    CommonModule,
    TalentRoutingModule,
    TalentModuleModule,
    FormsModule,
    TalentModuleModule
  ], 
})
export class TalentModule { }
