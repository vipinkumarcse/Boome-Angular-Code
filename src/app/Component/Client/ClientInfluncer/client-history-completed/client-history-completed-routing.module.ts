import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientHistoryCompletedComponent } from './client-history-completed.component';

const routes: Routes = [
  {
    path: '',
    component: ClientHistoryCompletedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientHistoryCompletedRoutingModule { }
