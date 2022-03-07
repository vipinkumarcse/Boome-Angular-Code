import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientInfluncerHistoryComponent } from './client-influncer-history.component';

const routes: Routes = [
  {
    path: '',
    component: ClientInfluncerHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientInfluncerHistoryRoutingModule { }
