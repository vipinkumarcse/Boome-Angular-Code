import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientTalentDetailComponent } from './client-talent-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ClientTalentDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientTalentDetailRoutingModule { }
