import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingsBankDetailsComponent} from './settings-bank-details.component';

const routes: Routes = [
  {path:'',component:SettingsBankDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsBankDetailsRoutingModule { }
