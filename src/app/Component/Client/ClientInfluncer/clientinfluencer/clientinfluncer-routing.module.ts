import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientinfluencerComponent } from './clientinfluencer.component';

const routes: Routes = [
  {
    path: '',
    component: ClientinfluencerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientinfluncerRoutingModule { }
