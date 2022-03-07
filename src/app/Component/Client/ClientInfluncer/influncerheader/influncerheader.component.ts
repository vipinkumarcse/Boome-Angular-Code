import { Component, OnInit } from '@angular/core';
import { CommonClientService } from '../../CommonClientService/common-client.service';


@Component({
  selector: 'app-influncerheader',
  templateUrl: './influncerheader.component.html',
  styleUrls: ['./influncerheader.component.css']
})
export class InfluncerheaderComponent implements OnInit {
  clientprofileData: any;

  constructor(public ClientInfluncerFunction: CommonClientService) { }

  ngOnInit(): void {
    this.ClientInfluncerFunction.clientData.subscribe((res:any)=>{
      this.clientprofileData = res
     // console.log(this.clientprofileData)
      })
  }

}
