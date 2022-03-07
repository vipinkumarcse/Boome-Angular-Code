import { Component, OnInit , Inject, ElementRef, ViewChild, NgZone} from '@angular/core';
import { DatePipe } from '@angular/common';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import * as moment from 'moment';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';


declare var google:any;


const colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'brown',
  'BurlyWood',
  'Cyan',
  'DarkGreen',
  'DarkOrchid',
  'DarkOliveGreen',
  'Fuchsia',
  'GoldenRod',
  'Indigo',
  'LightCoral',
  'MediumSlateBlue',
];
let colorIndex = 0;

// const place = null as google.maps.places.PlaceResult;
// type Components = typeof place.address_components;



@Component({
  selector: 'app-travelling-time',
  templateUrl: './travelling-time.component.html',
  styleUrls: ['./travelling-time.component.css']
})
export class TravellingTimeComponent implements OnInit {

  talentData: FormGroup;
  topBar={name:'Travelling Time' ,icon:'assets/images/blue_star.svg',
  // date:new Date()
  date : this.datePipe.transform( new Date(),'dd/MM/yyyy')
}
  // topBar={name:'Travelling Time' ,icon:'assets/images/blue_star.svg',date:new Date().getDate()+'/'+ new Date().getMonth() +'/'+ new Date().getFullYear()}

  public entries = [];
  destinationForm: FormGroup;
  city :any ;
  state :any ;
  zip :any ;
  country:any ;
  country_code:any;
  location:any ;
  lat:any ;
  lng:any ;
  alldestinationParam:any ; 
  minDate : any
  maxDate :any 
  date = new Date()



  constructor(private datePipe:DatePipe , public form: FormBuilder, public messgae: MessageHandlingService,   private ngZone: NgZone , public http: HttpFunctionListService,  public apiList: ApiListService , public formBuilder: FormBuilder) { 
  }

  ngOnInit(): void {
    this.destinationForm = this.form.group({
      destinationValues: ['', [Validators.required]],
      departDate: ['', [Validators.required]],
      returnDate: ['', [Validators.required]],
      city:['',[Validators.required]],
      country:['',[Validators.required]],
      state:['',[Validators.required]],
      lat:['',[Validators.required]],
      lng:['',[Validators.required]],
      location:['',[Validators.required]]
    });
    var input = document.getElementById('pac-input') as HTMLInputElement;
    var autocomplete = new google.maps.places.Autocomplete(input) ;
    var that = this
     autocomplete.addListener('place_changed', function (evt) {
       
      var results = autocomplete.getPlace();
      results.address_components.filter(res => {
       if (res.types.includes("locality")) {
        that.destinationForm.patchValue({
          city : res.long_name
         })
      
      }
      if (res.types.includes("administrative_area_level_1")) {
        that.destinationForm.patchValue({
          state:res.long_name
        })
      }
      if (res.types.includes("country")) {
        that.destinationForm.patchValue({
         country: res.long_name
        })
      }
      })
      that.destinationForm.patchValue({
       location : results.formatted_address,
       lat : results.geometry.location.lat(),
      lng : results.geometry.location.lng(),
      })
    
     //  console.log("this.city", this.city);
     //  console.log("this.state", this.state); 
    });


 }
  travellingsubmit(){
  //  console.log('hi');
   // console.log(this.destinationForm.value.destinationValues
     // )
  }

  travellingTime() {
  //  console.log(this.city)
    let data = {
        fromAddress: "NA",
        fromCity: "NA",
        fromCountry: "NA",
        fromLocation: [
          0,
          0
        ],
        toAddress: this.destinationForm.value.city,
        toCity: this.destinationForm.value.state,
        toCountry: this.destinationForm.value.country,
        toLocation: [
          this.destinationForm.value.lat,this.destinationForm.value.lng
        ],
        departDate: moment(this.destinationForm.value.departDate).format('DD-MM-yyyy') , 
        returnDate: moment(this.destinationForm.value.returnDate).format('DD-MM-yyyy')
    }
  //  console.log("data", data);
    this.http.post(this.apiList.travellingtime, data).subscribe((res: any) => {
      if (res.statusCode == 200) {
       // console.log(res);
        this.messgae.success(res.message)
        this.destinationForm.reset()
        
      }

    }, error => {
    })
  }


}

