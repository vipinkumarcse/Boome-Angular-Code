import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { InfluncerModuleRoutingModule } from './influncer-module-routing.module';
import { InfluncerheaderComponent } from '../influncerheader/influncerheader.component';
import { ClientInfluncerDetailsComponent } from '../client-influncer-details/client-influncer-details.component';
import { ClientSettingSidebarComponent } from '../client-setting-sidebar/client-setting-sidebar.component';
import { ClientInfluncerMessageComponent } from '../client-influncer-message/client-influncer-message.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    InfluncerheaderComponent,
    ClientInfluncerDetailsComponent,
    ClientSettingSidebarComponent,
   // ClientInfluncerMessageComponent,
    
  ],
  imports: [
    CommonModule,
    InfluncerModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      responsive: true,
    }),
    
  ],exports:[InfluncerheaderComponent, ClientSettingSidebarComponent,
   // ClientInfluncerMessageComponent,
  ],
 
})
export class InfluncerModuleModule { }
