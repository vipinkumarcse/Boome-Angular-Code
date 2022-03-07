import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {

  // topBar={name:'Messages', icon:'assets/images/message_icn.png',date:new Date()}
  topBar = { name: 'Messages', icon: 'assets/images/message_icn.png', 
  // date: new Date()
  date : this.datePipe.transform( new Date(),'dd/MM/yyyy')

}
// topBar={name:'Messages', icon:'assets/images/message_icn.png',date:new Date().getDate()+'/'+ new Date().getMonth() +'/'+ new Date().getFullYear()}

constructor(private datePipe:DatePipe) { }

  ngOnInit(): void {
  }

}
