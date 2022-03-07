import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientInfluncerMessageRoutingModule } from './client-influncer-message-routing.module';
import { ClientInfluncerMessageComponent } from './client-influncer-message.component';
import { InfluncerModuleModule } from '../influncer-module/influncer-module.module';
// import { SocketIoModule } from 'ngx-socket-io';


@NgModule({
  declarations: [ClientInfluncerMessageComponent],
  imports: [
    CommonModule,
    ClientInfluncerMessageRoutingModule,
    InfluncerModuleModule,
    // SocketIoModule
  ]
})
export class ClientInfluncerMessageModule { }
