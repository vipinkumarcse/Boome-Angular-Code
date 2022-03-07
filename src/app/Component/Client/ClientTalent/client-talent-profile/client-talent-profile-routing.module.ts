import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientTalentProfileComponent } from './client-talent-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ClientTalentProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientTalentProfileRoutingModule { }
