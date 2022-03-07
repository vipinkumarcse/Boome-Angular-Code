import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import { ClientTalentModuleRoutingModule } from './client-talent-module-routing.module';
import { ClientTalentheaderComponent } from '../client-talentheader/client-talentheader.component';
// import { ClientTalentSettingsComponent } from '../client-talent-settings/client-talent-settings.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ClientTalentSettingSidebarComponent } from '../client-talent-setting-sidebar/client-talent-setting-sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ClientTalentheaderComponent,
    ClientTalentSettingSidebarComponent,
  ],
  
  imports: [
    CommonModule,
    ClientTalentModuleRoutingModule,
    MatDatepickerModule,
    FormsModule ,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
  //  MatMomentDateModule,
     NgbModule
  ],
  exports:[ClientTalentheaderComponent, ClientTalentSettingSidebarComponent]
})
export class ClientTalentModuleModule { }
