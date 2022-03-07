import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientEditSocialComponent } from './client-edit-social.component';

const routes: Routes = [
  {
    path: '',
    component: ClientEditSocialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientEditSocialRoutingModule { }
