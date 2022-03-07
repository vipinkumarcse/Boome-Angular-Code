import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientTalentBookingsRoutingModule } from './client-talent-bookings-routing.module';
import { ClientTalentModuleModule } from '../client-talent-module/client-talent-module.module';
import { ClientTalentBookingsComponent } from './client-talent-bookings.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ClientTalentBookingsComponent],
  imports: [
    CommonModule,
    ClientTalentBookingsRoutingModule,
    ClientTalentModuleModule,
    NgbModule
  ]
})
export class ClientTalentBookingsModule { }
