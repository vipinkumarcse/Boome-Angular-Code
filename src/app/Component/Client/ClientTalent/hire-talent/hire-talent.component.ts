import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import * as moment from 'moment';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { FormBuilder, FormControl,FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-hire-talent',
  templateUrl: './hire-talent.component.html',
  styleUrls: ['./hire-talent.component.css']
})
export class HireTalentComponent implements OnInit {

  id: any;
  details: any;
  profileData:any 
  showAge: any;
  age: any;
  bookingDate: any;
  receiverId:any ;
  formData:any ;
  pricePerHours:any

  constructor (private route:ActivatedRoute, public router:Router ,
    public messgae: MessageHandlingService,  public formBuilder: FormBuilder ,  public apiList: ApiListService, public http: HttpFunctionListService)  {
     this.route.params.subscribe(params => {
       this.id = params['id'];
       console.log(this.id, "this.id");
       
     });

     this.formData = this.formBuilder.group({
      title: ['', [Validators.required]],
      startDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      description: [],
    })

    }
 
   ngOnInit(): void {
     this.detail()
   }
 
   detail(){
     // debugger
     this.http.get(this.apiList.talentDetails + this.id + '?isPaid=true').subscribe((res:any)=>{
       console.log(res)
       if (res.statusCode == 200) {
         this.details = res.data
         this.pricePerHours =  this.details.user.pricePerHour
         console.log("this.details",this.details);
       }
     },error=>{
 
     })
   }


submit() {
  debugger

  let strtTime = this.formData.value.startTime
  let endTime = this.formData.value.endTime 

  let splitdata =  strtTime.split(":");
  console.log(splitdata)
   // const url = 'https://www.messenger.com/t/' + a[1] 
   const url = 'http://m.me/'+ splitdata[1];
   const bundlename = 'http://m.me/'+ splitdata[1];



 let data = {
  title: this.formData.value.title ,
  description: this.formData.value.title,
  bookedFor: this.id,
  paymentMode: "cash",
  currencyType: "usd",
  // totalAmount: (500 * this.pricePerHours) ,
  totalAmount: 500 ,
 startDate: moment(this.formData.value.startDate).format('DD-MM-yyyy'),
  startTime: this.formData.value.startTime,
  endTime: this.formData.value.endTime ,
  // startTime:'7-00',
  // endTime: '10-00' ,
  totalHour: '4',
     }
     this.http.post(this.apiList.hireTalent, data).subscribe((res: any) => {
       if (res.statusCode == 200) {
         this.messgae.success(res.message)
         // this.getDetail()
       }
     }, error => {
 
     })
   }
 

}
