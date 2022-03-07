import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientBookingDetailCompletedRoutingModule } from './client-booking-detail-completed-routing.module';
import { ClientBookingDetailCompletedComponent } from './client-booking-detail-completed.component';
import { ClientTalentModuleModule } from '../client-talent-module/client-talent-module.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';




@NgModule({
  declarations: [ClientBookingDetailCompletedComponent],
  imports: [
    CommonModule,
    FormsModule , 
    ClientBookingDetailCompletedRoutingModule,
    ClientTalentModuleModule,
    NgbModule , 
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class ClientBookingDetailCompletedModule { }
