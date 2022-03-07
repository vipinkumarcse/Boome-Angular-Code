import { Component, OnInit } from '@angular/core';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';

@Component({
  selector: 'app-talent-setting-about-us',
  templateUrl: './talent-setting-about-us.component.html',
  styleUrls: ['./talent-setting-about-us.component.css']
})
export class TalentSettingAboutUsComponent implements OnInit {
  static: any;
  aboutUs: any;

  constructor(public apiList: ApiListService, public http: HttpFunctionListService) { }

  ngOnInit(): void {
    this.staticData()
  }
  staticData() {
    this.http.get(this.apiList.staticData+'aboutus').subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.aboutUs = res.data;
        console.log("talent-setting-about",this.static)
      }
    }, error => {

    })
  }
}
