import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientInfluncerProfileComponent } from './client-influncer-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ClientInfluncerProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientInfluncerProfileRoutingModule { }
