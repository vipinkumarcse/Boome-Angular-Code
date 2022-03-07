import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TravellingTimeComponent} from './travelling-time.component';
import { TravellingTimeRoutingModule } from './travelling-time-routing.module';
import { SettingsModuleModule } from '../settings-module/settings-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
// import { GoogleService } from './google.service';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [TravellingTimeComponent],
  imports: [
    CommonModule,
    SettingsModuleModule,
    ReactiveFormsModule ,
    MatNativeDateModule,
    MatDatepickerModule,
    // BrowserAnimationsModule,
    TravellingTimeRoutingModule
   
  ]
})
export class TravellingTimeModule { } 
