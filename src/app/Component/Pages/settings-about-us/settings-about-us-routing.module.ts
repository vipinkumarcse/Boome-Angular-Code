import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsAboutUsComponent } from './settings-about-us.component';

const routes: Routes = [
  {path:'',component:SettingsAboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsAboutUsRoutingModule { }
