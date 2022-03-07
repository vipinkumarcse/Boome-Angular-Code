import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientTalentReviewsComponent } from './client-talent-reviews.component';

const routes: Routes = [
  {
    path: '',
    component: ClientTalentReviewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientTalentReviewsRoutingModule { }
