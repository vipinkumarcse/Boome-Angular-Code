import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-settings-payment',
  templateUrl: './settings-payment.component.html',
  styleUrls: ['./settings-payment.component.css']
})

export class SettingsPaymentComponent implements OnInit {

  topBar = { name: 'Settings', icon: 'assets/images/home_icn.svg', 
  // date: new Date()
  date : this.datePipe.transform( new Date(),'dd/MM/yyyy')
}
  constructor( private datePipe:DatePipe) { }

  ngOnInit(): void {
  }

}
