import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientHistoryOngoingComponent } from './client-history-ongoing.component';

const routes: Routes = [
  {
    path: '',
    component: ClientHistoryOngoingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientHistoryOngoingRoutingModule { }
