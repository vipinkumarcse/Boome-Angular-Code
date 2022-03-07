import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienttalentRoutingModule } from './clienttalent-routing.module';
import { ClientTalentModuleModule } from '../client-talent-module/client-talent-module.module';
import { ClienttalentComponent } from './clienttalent.component';
import { NgbModule, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ClienttalentComponent],
  imports: [
    CommonModule,
    ClienttalentRoutingModule,
    ClientTalentModuleModule,
    NgbModule,
    FormsModule,
    NgbRating ,
    ReactiveFormsModule

  ]
})
export class ClienttalentModule { }
