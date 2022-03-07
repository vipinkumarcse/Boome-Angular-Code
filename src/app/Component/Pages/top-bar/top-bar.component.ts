import { Component, OnInit,Input } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
    console.log("datadatadata",this.data);
    
  }

}
