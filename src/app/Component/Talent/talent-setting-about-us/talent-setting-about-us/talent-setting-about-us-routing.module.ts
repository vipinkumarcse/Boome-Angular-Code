import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalentSettingAboutUsComponent } from '../talent-setting-about-us.component';

const routes: Routes = [
  {path:'',
  component:TalentSettingAboutUsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentSettingAboutUsRoutingModule { }
