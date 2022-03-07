import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingsAddressDetailsComponent} from './settings-address-details.component';
const routes: Routes = [
  {path:'',component:SettingsAddressDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsAddressDetailsRoutingModule { }
