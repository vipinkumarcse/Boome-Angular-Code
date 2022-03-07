import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalentSettingsComponent } from '../talent-settings.component';

const routes: Routes = [
  {path:'',
  component:TalentSettingsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentSettingsRoutingModule { }
