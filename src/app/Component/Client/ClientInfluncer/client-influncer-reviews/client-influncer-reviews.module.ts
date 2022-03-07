import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientInfluncerReviewsRoutingModule } from './client-influncer-reviews-routing.module';
import { ClientInfluncerReviewsComponent } from './client-influncer-reviews.component';
import { InfluncerModuleModule } from '../influncer-module/influncer-module.module';


@NgModule({
  declarations: [ClientInfluncerReviewsComponent],
  imports: [
    CommonModule,
    ClientInfluncerReviewsRoutingModule,
    InfluncerModuleModule
  ]
})
export class ClientInfluncerReviewsModule { }
