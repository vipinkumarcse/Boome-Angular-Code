import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingDetailsCompletedRoutingModule } from './booking-details-completed-routing.module';
import { BookingDetailsCompletedComponent } from '../booking-details-completed.component';
import { TalentHeaderComponent } from '../../talent-header/talent-header.component';
import { LeftSocialTalentComponent } from '../../left-social-talent/left-social-talent.component';
import { TalentSettingsSidebarComponent } from '../../talent-settings-sidebar/talent-settings-sidebar.component';
import { TalentTopbarComponent } from '../../talent-topbar/talent-topbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { TalentModuleModule } from '../../talent-module/talent-module.module';


@NgModule({
  declarations: [BookingDetailsCompletedComponent
 ],
  imports: [
    CommonModule,
    BookingDetailsCompletedRoutingModule,
    Ng2TelInputModule,
    NgbModule,
    TalentModuleModule
  ] , 
})
export class BookingDetailsCompletedModule { }
