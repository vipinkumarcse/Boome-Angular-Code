import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsComponent} from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { MatNativeDateModule} from '@angular/material/core';
import { SettingsModuleModule } from '../settings-module/settings-module.module';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsModuleModule,
    SettingsRoutingModule,
    ReactiveFormsModule,
     Ng2TelInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
   ]
   
})
export class SettingsModule { }
