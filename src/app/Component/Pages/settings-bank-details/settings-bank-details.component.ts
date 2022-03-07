import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-settings-bank-details',
  templateUrl: './settings-bank-details.component.html',
  styleUrls: ['./settings-bank-details.component.css']
})
export class SettingsBankDetailsComponent implements OnInit {
  ProfileData: FormGroup;


  topBar = { name: 'Settings', icon: 'assets/images/home_icn.svg', 
  // date: new Date()
  date : this.datePipe.transform( new Date(),'dd/MM/yyyy')
}
  // topBar={name:'Settings',icon:'assets/images/blue_settings.svg',date:new Date().getDate()+'/'+ new Date().getMonth() +'/'+ new Date().getFullYear()}


  constructor(public messgae: MessageHandlingService, private datePipe:DatePipe, public apiList: ApiListService, public http: HttpFunctionListService, public formBuilder: FormBuilder) {
   
  
    this.ProfileData = this.formBuilder.group({
      accountNumber: [''],
      ibanNumber: [''],
      routingNumber: [''],
      swiftCode: [''],
      bankName: [''],
      bankAddress: ['']
    })
    this.getData()
  }

  ngOnInit(): void {
  }

  getData() {
    this.http.get(this.apiList.influncerMybankDetail).subscribe((res: any) => {
      console.log(res)
      if (res.statusCode == 200) {
        this.ProfileData.patchValue({
          accountNumber: res.data.user?.accountNumber,
          ibanNumber: res.data.user?.ibanNumber,
          routingNumber: res.data.user?.routingNumber,
          swiftCode: res.data.user?.swiftCode,
          bankName: res.data.user?.bankName,
          bankAddress: res.data.user?.bankAddress
        })
      }
    }, error => {

    })
  }

  submit() {
    let data = {
      accountNumber: this.ProfileData.value.accountNumber,
      ibanNumber:  this.ProfileData.value.ibanNumber,
      routingNumber:  this.ProfileData.value.routingNumber,
      swiftCode:  this.ProfileData.value.swiftCode,
      bankName:  this.ProfileData.value.bankName,
      bankAddress:  this.ProfileData.value.bankAddress
    }
    this.http.post(this.apiList.influncerEditBankDetails, data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.messgae.success(res.message)
        this.getData()
      }
    }, error => {

    })
  }

}
