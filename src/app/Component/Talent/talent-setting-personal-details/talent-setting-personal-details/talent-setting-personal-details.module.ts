import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalentSettingPersonalDetailsRoutingModule } from './talent-setting-personal-details-routing.module';
import { TalentSettingPersonalDetailsComponent } from '../talent-setting-personal-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TalentModuleModule } from '../../talent-module/talent-module.module';
import { MatNativeDateModule} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [TalentSettingPersonalDetailsComponent
  ],
  imports: [
    CommonModule,
    TalentSettingPersonalDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TalentModuleModule,
    MatNativeDateModule,
    MatDatepickerModule
  ] , 
})
export class TalentSettingPersonalDetailsModule { }
