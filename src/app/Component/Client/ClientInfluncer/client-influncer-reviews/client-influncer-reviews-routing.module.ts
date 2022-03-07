import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientInfluncerReviewsComponent } from './client-influncer-reviews.component';

const routes: Routes = [
  {
    path: '',
    component: ClientInfluncerReviewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientInfluncerReviewsRoutingModule { }
