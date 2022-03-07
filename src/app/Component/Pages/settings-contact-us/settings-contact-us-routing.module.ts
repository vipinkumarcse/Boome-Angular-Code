import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingsContactUsComponent} from './settings-contact-us.component';

const routes: Routes = [
  {path:'',component:SettingsContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsContactUsRoutingModule { }
