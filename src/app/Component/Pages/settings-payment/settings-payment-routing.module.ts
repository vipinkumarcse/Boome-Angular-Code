import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsPaymentComponent } from './settings-payment.component'

const routes: Routes = [
  {path:'',component:SettingsPaymentComponent}
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsPaymentRoutingModule { }
