import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { CommonFunctionService } from 'src/app/services/Common/common-function.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';

@Component({
  selector: 'app-talent-setting-contactus',
  templateUrl: './talent-setting-contactus.component.html',
  styleUrls: ['./talent-setting-contactus.component.css']
})
export class TalentSettingContactusComponent implements OnInit {
  ContactUs: FormGroup;

  constructor(public messgae: MessageHandlingService, public apiList: ApiListService, public http: HttpFunctionListService, public common: CommonFunctionService, public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ContactUs = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['',[Validators.required, this.emailValidator.bind(this)]],
      message: ['',[Validators.required]],
    })
  }

  sendContactUs() {
    let data = {
      name: this.ContactUs.value.name,
      email: this.ContactUs.value.email,
      message: this.ContactUs.value.message
    }
    this.http.post(this.apiList.ContactUs, data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.messgae.success(res.message);
        this.ContactUs.reset()
      }
    }, error => {

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
