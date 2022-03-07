import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TravellingTimeComponent} from './travelling-time.component';

const routes: Routes = [
  {path:'',component:TravellingTimeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravellingTimeRoutingModule { }
