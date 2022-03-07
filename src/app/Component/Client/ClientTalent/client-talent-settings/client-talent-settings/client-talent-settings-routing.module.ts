import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientTalentSettingsComponent } from '../client-talent-settings.component';

const routes: Routes = [
  { path: '',  component: ClientTalentSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientTalentSettingsRoutingModule { }
