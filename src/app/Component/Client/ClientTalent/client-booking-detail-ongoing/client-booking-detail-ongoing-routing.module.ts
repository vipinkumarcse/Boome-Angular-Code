import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientBookingDetailOngoingComponent } from './client-booking-detail-ongoing.component';

const routes: Routes = [
  {
    path: '',
    component: ClientBookingDetailOngoingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientBookingDetailOngoingRoutingModule { }
