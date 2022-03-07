import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientHistoryUpcomingComponent } from './client-history-upcoming.component';

const routes: Routes = [
  {
    path: '',
    component: ClientHistoryUpcomingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientHistoryUpcomingRoutingModule { }
