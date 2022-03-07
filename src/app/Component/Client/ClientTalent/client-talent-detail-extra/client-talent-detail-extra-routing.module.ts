import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientTalentDetailExtraComponent } from './client-talent-detail-extra.component';

const routes: Routes = [
  {
    path: '',
    component: ClientTalentDetailExtraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientTalentDetailExtraRoutingModule { }
