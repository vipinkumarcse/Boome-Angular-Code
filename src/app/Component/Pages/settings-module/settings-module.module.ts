import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsSidebarComponent } from '../settings-sidebar/settings-sidebar.component';
import { SettingsModuleRoutingModule } from './settings-module-routing.module';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2TelInputModule } from 'ng2-tel-input';

@NgModule({
  declarations: [
    TopBarComponent, UserHeaderComponent,SettingsSidebarComponent
  ],
  imports: [
    CommonModule,
    SettingsModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    NgbModule
  ],
  exports: [TopBarComponent, UserHeaderComponent,SettingsSidebarComponent],
})
export class SettingsModuleModule { }
