import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-settings-address-details',
  templateUrl: './settings-address-details.component.html',
  styleUrls: ['./settings-address-details.component.css']
})
export class SettingsAddressDetailsComponent implements OnInit {

  topBar = { name: 'Settings', icon: 'assets/images/home_icn.svg', 
  // date: new Date()
  date : this.datePipe.transform( new Date(),'dd/MM/yyyy')
}
  // topBar = { name: 'Settings', icon: 'assets/images/blue_settings.svg', date: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear() }
  ProfileData: FormGroup;
  allData: any;
  country: string[];
  countryvalue: any;
  cities: any;

  constructor(public messgae: MessageHandlingService, private datePipe:DatePipe ,public apiList: ApiListService, public http: HttpFunctionListService, public formBuilder: FormBuilder) {
    this.getData()
  }

  ngOnInit(): void {
    this.ProfileData = this.formBuilder.group({
      completeAddress: [''],
      postalCode: [''],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]]
    })

    this.getData()
  }

  countryList() {
    this.http.get('assets/countries.json').subscribe((res: any) => {
      this.allData = res
      this.country = Object.keys(this.allData);
      this.getCitieswithcountries(this.ProfileData.value.country)
    })
  }

  getCitieswithcountries(event) {
    if (event.target) {    // first time select first value of array
      this.countryvalue = event.target.value
    } else {
      this.countryvalue = event
    }
    this.cities = Object(this.allData[this.countryvalue]);
  }

  getData() {
    this.http.get(this.apiList.influncerSavedAddress).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.ProfileData.patchValue({
          completeAddress: res.data.address.completeAddress,
          postalCode: res.data.address.postalCode,
          city: res.data.address.city,
          country: res.data.address.country
        })
        this.countryList()
      }
    }, error => {

    })
  }

  submit() {
    let data = {
      completeAddress: this.ProfileData.value.completeAddress,
      postalCode: this.ProfileData.value.postalCode,
      city: this.ProfileData.value.city,
      country: this.ProfileData.value.country,
    }
    this.http.post(this.apiList.influncerEditAddress, data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.messgae.success(res.message)
        this.getData()
      }
    }, error => {

    })
  }

}
