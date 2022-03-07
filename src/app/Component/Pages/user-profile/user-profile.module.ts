import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserProfileComponent} from './user-profile.component';
// import {SharedModuleModule} from '../shared-module/shared-module.module';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SettingsModuleModule } from '../settings-module/settings-module.module';
import { NumberformatComponent } from './number-format.pipes';

import { NgApexchartsModule } from 'ng-apexcharts'





@NgModule({
  declarations: [UserProfileComponent, NumberformatComponent],
  imports: [
    CommonModule,
    SettingsModuleModule,
    UserProfileRoutingModule,
    NgApexchartsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      responsive: true,
    }),
  ]
})
export class UserProfileModule { } 
