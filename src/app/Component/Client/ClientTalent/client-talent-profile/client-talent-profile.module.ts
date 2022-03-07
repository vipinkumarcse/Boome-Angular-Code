import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientTalentProfileRoutingModule } from './client-talent-profile-routing.module';
import { ClientTalentModuleModule } from '../client-talent-module/client-talent-module.module';
import { ClientTalentProfileComponent } from './client-talent-profile.component';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';


@NgModule({
  declarations: [ClientTalentProfileComponent],
  imports: [
    CommonModule,
    ClientTalentProfileRoutingModule,
    ClientTalentModuleModule,
    Ng2TelInputModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot("pk_test_v6mQmgIwxFEq26Byof5rsyIQ")


  ]
})
export class ClientTalentProfileModule { }
