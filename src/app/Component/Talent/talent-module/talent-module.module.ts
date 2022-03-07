import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalentModuleRoutingModule } from './talent-module-routing.module';
import { FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TalentHeaderComponent } from '../talent-header/talent-header.component';
import { TalentTopbarComponent } from '../talent-topbar/talent-topbar.component';
import { TalentSettingsSidebarComponent } from '../talent-settings-sidebar/talent-settings-sidebar.component';
import { LeftSocialTalentComponent } from '../left-social-talent/left-social-talent.component';



@NgModule({
  declarations: [
    TalentHeaderComponent,
    TalentTopbarComponent , 
    TalentSettingsSidebarComponent, 
    LeftSocialTalentComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    TalentModuleRoutingModule,
    NgbModule
  ],
   exports: [TalentHeaderComponent, TalentTopbarComponent, TalentSettingsSidebarComponent, LeftSocialTalentComponent],
})
export class TalentModuleModule { }
