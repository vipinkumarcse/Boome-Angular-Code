import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import {ReviewComponent} from './review.component';
import { ReviewRoutingModule } from './review-routing.module';
import { SettingsModuleModule } from '../settings-module/settings-module.module';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// import { RatingModule } from 'ngx-rating';


@NgModule({
  declarations: [ReviewComponent],
  imports: [
    CommonModule,
    SettingsModuleModule,
    ReviewRoutingModule,
    NgbModule
    // RatingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ReviewModule { }
