import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CollaborationComponent} from './collaboration.component';
import { CollaborationRoutingModule } from './collaboration-routing.module';
import { SettingsModuleModule } from '../settings-module/settings-module.module';


@NgModule({
  declarations: [CollaborationComponent],
  imports: [
    CommonModule,
    SettingsModuleModule,
    CollaborationRoutingModule
  ]
})
export class CollaborationModule { }
