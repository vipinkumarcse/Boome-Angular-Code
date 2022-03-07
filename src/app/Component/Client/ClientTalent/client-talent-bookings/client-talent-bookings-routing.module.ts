import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientTalentBookingsComponent } from './client-talent-bookings.component';

const routes: Routes = [
  {
    path: '',
    component: ClientTalentBookingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientTalentBookingsRoutingModule { }
