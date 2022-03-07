import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HireTalentPaymentComponent } from './hire-talent-payment.component';

const routes: Routes = [
  {
    path: '',
    component: HireTalentPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HireTalentPaymentRoutingModule { }
