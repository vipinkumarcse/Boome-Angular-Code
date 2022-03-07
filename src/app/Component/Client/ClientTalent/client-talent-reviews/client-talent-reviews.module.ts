import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientTalentReviewsRoutingModule } from './client-talent-reviews-routing.module';
import { ClientTalentModuleModule } from '../client-talent-module/client-talent-module.module';
import { ClientTalentReviewsComponent } from './client-talent-reviews.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ClientTalentReviewsComponent],
  imports: [
    CommonModule,
    ClientTalentReviewsRoutingModule,
    ClientTalentModuleModule,
    NgbModule
  ]
})
export class ClientTalentReviewsModule { }
