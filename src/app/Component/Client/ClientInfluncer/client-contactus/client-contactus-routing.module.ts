import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientContactusComponent } from './client-contactus.component';

const routes: Routes = [
  {
    path: '',
    component: ClientContactusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientContactusRoutingModule { }
