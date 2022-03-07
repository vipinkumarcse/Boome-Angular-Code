import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TalentComponent} from './talent.component'

const routes: Routes = [
  {path:'',component:TalentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentRoutingModule { }
