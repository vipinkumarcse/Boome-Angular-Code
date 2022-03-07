import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountTalentComponent } from '../create-account-talent.component';

const routes: Routes = [
  {path:'',
  component:CreateAccountTalentComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAccountTalentRoutingModule { }
