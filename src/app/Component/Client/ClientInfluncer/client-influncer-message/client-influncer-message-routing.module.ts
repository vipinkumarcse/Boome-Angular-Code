import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientInfluncerMessageComponent } from './client-influncer-message.component';

const routes: Routes = [
  {
    path: '',
    component: ClientInfluncerMessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientInfluncerMessageRoutingModule { }
