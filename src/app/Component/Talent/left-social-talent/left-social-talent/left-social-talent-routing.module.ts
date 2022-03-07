import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftSocialTalentComponent } from '../left-social-talent.component';

const routes: Routes = [
  {path:'',
  component:LeftSocialTalentComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeftSocialTalentRoutingModule { }
