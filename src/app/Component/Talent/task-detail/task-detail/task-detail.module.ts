import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDetailRoutingModule } from './task-detail-routing.module';
import { TaskDetailComponent } from '../task-detail.component';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TalentModuleModule } from '../../talent-module/talent-module.module';


@NgModule({
  declarations: [TaskDetailComponent],
  imports: [
    CommonModule,
    TaskDetailRoutingModule,
    Ng2TelInputModule,
    NgbModule, 
    TalentModuleModule
  ] ,

})
export class TaskDetailModule { }
