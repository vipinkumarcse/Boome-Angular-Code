import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientBookingDetailUpcomingComponent } from './client-booking-detail-upcoming.component';

const routes: Routes = [
  {
    path: '',
    component: ClientBookingDetailUpcomingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientBookingDetailUpcomingRoutingModule { }
