import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingsSocialAccountComponent} from './settings-social-account.component';

const routes: Routes = [
  {path:'',component:SettingsSocialAccountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsSocialAccountRoutingModule { }
