import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientTalentMessageComponent } from './client-talent-message.component';

const routes: Routes = [
  {
    path: '',
    component: ClientTalentMessageComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientTalentMessageRoutingModule { }
