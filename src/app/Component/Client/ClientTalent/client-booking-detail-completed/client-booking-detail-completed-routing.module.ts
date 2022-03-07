import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientBookingDetailCompletedComponent } from './client-booking-detail-completed.component';

const routes: Routes = [
  {
    path: '',
    component: ClientBookingDetailCompletedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientBookingDetailCompletedRoutingModule { }
