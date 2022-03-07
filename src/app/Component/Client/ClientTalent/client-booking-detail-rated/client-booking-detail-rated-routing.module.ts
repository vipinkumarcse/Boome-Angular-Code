import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientBookingDetailRatedComponent } from './client-booking-detail-rated.component';

const routes: Routes = [
  {
    path: '',
    component: ClientBookingDetailRatedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientBookingDetailRatedRoutingModule { }
