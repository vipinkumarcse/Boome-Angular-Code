import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientMainComponent } from '../client-main/client-main.component';
import { ClientregisterComponent } from '../clientregister/clientregister.component';
import { ClienttalentComponent } from '../ClientTalent/clienttalent/clienttalent.component';
import { ClientSignupComponent } from '../client-signup/client-signup.component';
import { AddSocialClientComponent } from '../add-social-client/add-social-client.component';
import { ChoosePlanClientComponent } from '../choose-plan-client/choose-plan-client.component';


const routes: Routes = [
  { path: 'client-register',  component: ClientregisterComponent },
  { path: 'client-signup',  component: ClientSignupComponent },
  { path: 'client',  component: ClientMainComponent },
  { path: 'clientTalent', component: ClienttalentComponent},
  { path: 'client-social-media-url', component: AddSocialClientComponent},
  { path: 'client-choose-plan', component: ChoosePlanClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientModuleRoutingModule { }
