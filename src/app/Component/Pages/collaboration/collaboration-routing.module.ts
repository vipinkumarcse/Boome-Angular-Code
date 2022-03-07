import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CollaborationComponent} from './collaboration.component';

const routes: Routes = [
  {path:'',component:CollaborationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollaborationRoutingModule { }
