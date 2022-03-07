import { Component, OnInit } from '@angular/core';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { Common_FunctionService } from '../CommonInfluncer/common-function.service';

@Component({
  selector: 'app-settings-sidebar',
  templateUrl: './settings-sidebar.component.html',
  styleUrls: ['./settings-sidebar.component.css']
})
export class SettingsSidebarComponent implements OnInit {
  profileData: any;

  constructor(public apiList: ApiListService, public http: HttpFunctionListService, public common:Common_FunctionService) { }

  ngOnInit(): void {
  this.common.subject.subscribe((res:any)=>{
    this.profileData = res
    })
  //  console.log(this.profileData)
   //.. this.getInfo()

  }

  // getInfo() {
  //   this.http.get(this.apiList.influncerMyProfile).subscribe((res: any) => {
  //     console.log(res)
  //     if (res.statusCode == 200) {
  //       this.profileData = res.data
  //     }
  //   }, error => {

  //   })
  // }

}
