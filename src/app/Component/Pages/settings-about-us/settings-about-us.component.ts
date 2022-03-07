import { Component, OnInit } from '@angular/core';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';

@Component({
  selector: 'app-settings-about-us',
  templateUrl: './settings-about-us.component.html',
  styleUrls: ['./settings-about-us.component.css']
})
export class SettingsAboutUsComponent implements OnInit {


  topBar = { name: 'Settings', icon: 'assets/images/blue_settings.svg' }
  staticData: any;

  constructor(public apiList: ApiListService, public http: HttpFunctionListService) { }

  ngOnInit(): void {
    this.statucData()
  }

  statucData() {
    this.http.get(this.apiList.staticData + 'aboutus').subscribe((res: any) => {
      if (res.statusCode == 200) {
        console.log(res)
        this.staticData = res.data
        
      }
    }, error => {

    })
  }

}
