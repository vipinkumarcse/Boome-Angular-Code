import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientModuleRoutingModule } from './client-module-routing.module';
import { ClientregisterComponent } from '../clientregister/clientregister.component'
import { ClientMainComponent } from '../client-main/client-main.component';
//import { ClientinfluencerComponent } from '../ClientInfluncer/clientinfluencer/clientinfluencer.component';
import { ClienttalentComponent } from '../ClientTalent/clienttalent/clienttalent.component';
import { ClientTalentModuleModule } from '../ClientTalent/client-talent-module/client-talent-module.module';
import { InfluncerModuleModule } from '../ClientInfluncer/influncer-module/influncer-module.module'
import { ClientHeaderComponent } from '../client-header/client-header.component'
import { ClientSignupComponent } from '../client-signup/client-signup.component';
import { LeftSocialClientComponent } from '../left-social-client/left-social-client.component';
import { AddSocialClientComponent } from '../add-social-client/add-social-client.component';
import { ChoosePlanClientComponent } from '../choose-plan-client/choose-plan-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ClientHeaderComponent,
    ClientregisterComponent, 
    ClientMainComponent, 
   // ClientinfluencerComponent, 
    ClienttalentComponent,
    ClientSignupComponent,
    LeftSocialClientComponent,
    AddSocialClientComponent,
    ChoosePlanClientComponent,
  ],
  imports: [
    CommonModule,
    ClientModuleRoutingModule,
    ClientTalentModuleModule,
    FormsModule,
    InfluncerModuleModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    NgbModule
  ],
  exports:[ClientHeaderComponent, ClientregisterComponent, ClientMainComponent, LeftSocialClientComponent]
})
export class ClientModuleModule { }
