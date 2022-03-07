import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobDetailsComponent} from './job-details.component';

import { JobDetailsRoutingModule } from './job-details-routing.module';
import { SettingsModuleModule } from '../settings-module/settings-module.module';


@NgModule({
  declarations: [JobDetailsComponent],
  imports: [
    CommonModule,
    SettingsModuleModule,
    JobDetailsRoutingModule
  ]
})
export class JobDetailsModule { }
