import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterDetailsTalentComponent } from '../register-details-talent.component';

const routes: Routes = [
  {path:'',
  component:RegisterDetailsTalentComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterDetailsTalentRoutingModule { }
