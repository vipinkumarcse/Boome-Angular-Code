import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientJobRequestComponent } from './client-job-request.component';

const routes: Routes = [
  {
    path: '',
    component: ClientJobRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientJobRequestRoutingModule { }
