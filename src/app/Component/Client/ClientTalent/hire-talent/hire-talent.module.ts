import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HireTalentRoutingModule } from './hire-talent-routing.module';
import { ClientTalentModuleModule } from '../client-talent-module/client-talent-module.module';
import { HireTalentComponent } from './hire-talent.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HireTalentComponent],
  imports: [
    CommonModule,
    HireTalentRoutingModule,
    ClientTalentModuleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HireTalentModule { }
