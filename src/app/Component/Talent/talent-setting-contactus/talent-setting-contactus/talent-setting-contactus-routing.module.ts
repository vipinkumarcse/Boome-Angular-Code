import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalentSettingContactusComponent } from '../talent-setting-contactus.component';

const routes: Routes = [
  {path:'',
  component:TalentSettingContactusComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentSettingContactusRoutingModule { }
