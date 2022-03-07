import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalentSettingPersonalDetailsComponent } from '../talent-setting-personal-details.component';

const routes: Routes = [
  {path:'',
  component:TalentSettingPersonalDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentSettingPersonalDetailsRoutingModule { }
