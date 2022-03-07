import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoosePlanTalentComponent } from '../choose-plan-talent.component';

const routes: Routes = [
  {path:'',
  component:ChoosePlanTalentComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChoosePlanTalentRoutingModule { }
