import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HireTalentPaymentRoutingModule } from './hire-talent-payment-routing.module';
import { HireTalentPaymentComponent } from './hire-talent-payment.component';
import { ClientTalentModuleModule } from '../client-talent-module/client-talent-module.module';


@NgModule({
  declarations: [HireTalentPaymentComponent],
  imports: [
    CommonModule,
    HireTalentPaymentRoutingModule,
    ClientTalentModuleModule,

  ]
})
export class HireTalentPaymentModule { }
