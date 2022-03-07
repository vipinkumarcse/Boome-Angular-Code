import { Component, OnInit } from '@angular/core';
declare var cstmScroll: any;

@Component({
  selector: 'app-choose-plan-client',
  templateUrl: './choose-plan-client.component.html',
  styleUrls: ['./choose-plan-client.component.css']
})
export class ChoosePlanClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new cstmScroll;
  }

}
