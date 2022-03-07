import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { Common_FunctionService } from '../CommonInfluncer/common-function.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.css']
})
export class CollaborationComponent implements OnInit {
  data:any = {}
  contract:any = []
  collabs:any = []



  // topBar={name:'Collaborations', icon:'assets/images/collaborations.svg',date:new Date()}
  topBar = { name: 'Collaborations', icon: 'assets/images/collaborations.svg', 
  // date: new Date()
  date : this.datePipe.transform( new Date(),'dd/MM/yyyy')

}
//   topBar={name:'Collaborations', icon:'assets/images/collaborations.svg',date:new Date().getDate()+'/'+ new Date().getMonth() +'/'+ new Date().getFullYear()}

constructor(public formBuilder: FormBuilder, 
  private datePipe:DatePipe , public router: Router, public common: Common_FunctionService, public apiList: ApiListService, public http: HttpFunctionListService) { }

  ngOnInit(): void {
    this.collaboration()
  }

  collaboration(){
    this.http.get(this.apiList.influncerCollaboration).subscribe((res:any) => {
      
      if(res.statusCode == 200){
        this.data = res ;
        this.collabs =  res.data?.collabs;
        this.contract =  res.data?.contract
      }
    },
    error => {

    })

  }

}
