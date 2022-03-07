import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDetailsCompletedComponent } from '../booking-details-completed.component';

const routes: Routes = [
  {path:'',
  component:BookingDetailsCompletedComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingDetailsCompletedRoutingModule { }
