import { Component, OnInit } from '@angular/core';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-settings-contact-us',
  templateUrl: './settings-contact-us.component.html',
  styleUrls: ['./settings-contact-us.component.css']
})
export class SettingsContactUsComponent implements OnInit {

  topBar = { name: 'Settings', icon: 'assets/images/home_icn.svg', 
  // date: new Date()
  date : this.datePipe.transform( new Date(),'dd/MM/yyyy')
}
  // topBar={name:'Settings',icon:'assets/images/blue_settings.svg',date:new Date().getDate()+'/'+ new Date().getMonth() +'/'+ new Date().getFullYear()}
  ContactUsForm: FormGroup;


  constructor(public messgae: MessageHandlingService,public router:Router,  private datePipe:DatePipe, public apiList: ApiListService, public http: HttpFunctionListService, public formBuilder: FormBuilder) {
    this.ContactUsForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, this.emailValidator.bind(this)]],
      message: ['',[Validators.required]],
    })
   }

  ngOnInit(): void {

  }

  submit(){
    let data = {
      name:this.ContactUsForm.value.name,
      email:this.ContactUsForm.value.email,
      message:this.ContactUsForm.value.message,
    }
    this.http.post(this.apiList.ContactUs, data).subscribe((res:any)=>{
      if (res.statusCode == 200) {
        this.messgae.success(res.message);
        this.ContactUsForm.reset()
      }
    },error => {

    })
  }

  emailValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value != null) {
      if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
        return { invalidEmail: true };
      }
    }
  }

}
