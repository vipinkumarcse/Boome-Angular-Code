import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientInfluncerProfileRoutingModule } from './client-influncer-profile-routing.module';
import { ClientInfluncerProfileComponent } from './client-influncer-profile.component';
import { InfluncerModuleModule } from '../influncer-module/influncer-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2TelInputModule } from 'ng2-tel-input';


@NgModule({
  declarations: [ClientInfluncerProfileComponent],
  imports: [
    CommonModule,
    ClientInfluncerProfileRoutingModule,
    InfluncerModuleModule,
    ReactiveFormsModule,
    Ng2TelInputModule
  ]
})
export class ClientInfluncerProfileModule { }
