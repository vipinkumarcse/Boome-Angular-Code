import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { CommonFunctionService } from 'src/app/services/Common/common-function.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { CommonClientService } from '../../CommonClientService/common-client.service';

@Component({
  selector: 'app-client-contactus',
  templateUrl: './client-contactus.component.html',
  styleUrls: ['./client-contactus.component.css']
})
export class ClientContactusComponent implements OnInit {
  ContactUsForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public ClientInfluncerFunction: CommonClientService, public messgae: MessageHandlingService, public common: CommonFunctionService, public router: Router, public apiList: ApiListService, public http: HttpFunctionListService) {
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
