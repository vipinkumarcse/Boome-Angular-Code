import { Component, OnInit } from '@angular/core';
import { CommonClientService } from '../../CommonClientService/common-client.service';
import { Router } from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';


@Component({
  selector: 'app-client-talentheader',
  templateUrl: './client-talentheader.component.html',
  styleUrls: ['./client-talentheader.component.css']
})
export class ClientTalentheaderComponent implements OnInit {
  clientprofileData: any;
  profileData: any;
  data:any;
  difference:any;
  notifications:any = [];
  date = new Date() 
  yourDate:any;
  timing:any ;
  constructor(public ClientInfluncerFunction: CommonClientService ,
    public apiList: ApiListService,
     public router: Router,  public http: HttpFunctionListService) { }

  ngOnInit(): void {
    this.ClientInfluncerFunction.clientData.subscribe((res:any)=>{
    this.clientprofileData = res
     // console.log(this.clientprofileData)
    });
    this.notification()
  }

  
  notification(){
    this.http.get(this.apiList.notificationListing).subscribe((res:any) => {
      if(res.statusCode == 200){
        this.data = res.data
      this.notifications = this.data.notifications
        // console.log("this.notifications",this.notifications[0].createdAt);

        for (let index = 0; index < this.notifications.createdAt; index++) {
          this.timing =  this.notifications[index].createdAt
          console.log(this.timing);
        }
        console.log(this.timing);


//        this.yourDate = new Date(this.notifications[0].createdAt);
// this.difference = moment(this.yourDate).fromNow();
// console.log("this.difference",this.difference);

        
      }
    },
    error => {

    })
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/']) 
   }

}
