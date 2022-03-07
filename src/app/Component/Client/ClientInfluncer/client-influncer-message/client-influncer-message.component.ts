import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/services/Websocket.service';

@Component({
  selector: 'app-client-influncer-message',
  templateUrl: './client-influncer-message.component.html',
  styleUrls: ['./client-influncer-message.component.css']
})
export class ClientInfluncerMessageComponent implements OnInit {

  constructor(private socket:WebSocketService) { }

  ngOnInit(): void {
   // this.socket.onSocket()
   }

}
