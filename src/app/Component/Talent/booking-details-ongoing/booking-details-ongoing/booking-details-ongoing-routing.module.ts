import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDetailsOngoingComponent } from '../booking-details-ongoing.component';

const routes: Routes = [
  {path:'',
  component:BookingDetailsOngoingComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingDetailsOngoingRoutingModule { }
