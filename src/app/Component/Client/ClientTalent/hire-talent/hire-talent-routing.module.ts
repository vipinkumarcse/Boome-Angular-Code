import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HireTalentComponent } from './hire-talent.component';

const routes: Routes = [
  {
    path: '',
    component: HireTalentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HireTalentRoutingModule { }
