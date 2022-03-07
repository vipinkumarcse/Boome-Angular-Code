import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienttalentComponent } from './clienttalent.component';

const routes: Routes = [
  {
    path: '',
    component: ClienttalentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienttalentRoutingModule { }
