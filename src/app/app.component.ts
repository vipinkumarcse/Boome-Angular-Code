import { Component } from '@angular/core';
import { NotificationService } from './services/notification/notification.service';
import { WebSocketService } from './services/Websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BooMe';

  constructor(public websocket:WebSocketService,public notificationService:NotificationService){
    this.websocket.openSocket();
    this.getNotification();

}

getNotification(){
  const userId = 'user001';

  this.notificationService.requestPermission()
  this.notificationService.receiveMessage()
 }

}