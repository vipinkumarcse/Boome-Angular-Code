import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrivacyPolidyComponent} from './privacy-polidy.component';

const routes: Routes = [
  {path:'',component:PrivacyPolidyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivacyPolidyRoutingModule { }
