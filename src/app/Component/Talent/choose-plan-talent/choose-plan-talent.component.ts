import { Component, OnInit } from '@angular/core';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { Router } from '@angular/router';
declare var cstmScroll: any;

@Component({
  selector: 'app-choose-plan-talent',
  templateUrl: './choose-plan-talent.component.html',
  styleUrls: ['./choose-plan-talent.component.css']
})
export class ChoosePlanTalentComponent implements OnInit {
  plans:any = []

  constructor( public apiList: ApiListService, public http: HttpFunctionListService, public router:Router ) { }

  ngOnInit(): void {
    new cstmScroll;
    this.getAllPlans()
  }

  getAllPlans(){
    this.http.get(this.apiList.getAllSubscriptionPlans).subscribe((res: any) => {
      if (res.statusCode == 200) {
      this.plans = res.data.plans
      console.log(" this.plans", this.plans);
      }
    }, error => {
    })
  
  }

}
