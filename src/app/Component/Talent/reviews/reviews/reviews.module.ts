import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsComponent } from '../reviews.component';
import { TalentHeaderComponent } from '../../talent-header/talent-header.component';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TalentModuleModule } from '../../talent-module/talent-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ReviewsComponent ,
   ],
  imports: [
    CommonModule,
    ReviewsRoutingModule , 
    Ng2TelInputModule,
    NgbModule ,
    TalentModuleModule,
    FormsModule,
    ReactiveFormsModule,
  ],

})
export class ReviewsModule { }
