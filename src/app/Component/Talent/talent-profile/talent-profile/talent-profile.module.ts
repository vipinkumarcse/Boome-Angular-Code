import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalentProfileRoutingModule } from './talent-profile-routing.module';
import { TalentProfileComponent } from '../talent-profile.component';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TalentModuleModule } from '../../talent-module/talent-module.module';
import { NgxStripeModule } from 'ngx-stripe';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';




@NgModule({
  declarations: [TalentProfileComponent],
  imports: [
    CommonModule,
    TalentProfileRoutingModule,
    Ng2TelInputModule,
    NgbModule,
    FormsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    TalentModuleModule,
    NgxStripeModule.forRoot("pk_test_v6mQmgIwxFEq26Byof5rsyIQ")
  ] , 

})
export class TalentProfileModule { }
