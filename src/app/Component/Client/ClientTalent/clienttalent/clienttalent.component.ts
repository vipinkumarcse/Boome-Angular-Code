import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { CommonClientService } from '../../CommonClientService/common-client.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;


@Component({
  selector: 'app-clienttalent',
  templateUrl: './clienttalent.component.html',
  styleUrls: ['./clienttalent.component.css']
})
export class ClienttalentComponent implements OnInit {
  talentList: any;
  clientprofileData: any;
  categories:any = []
  select_interset: any = [];
  checked: boolean;
  talentData: FormGroup;
  talents:any = [] ;
  allReviews:any = []
  rating: any;
  max = 5
  currentRate = 3;
  name:any
  subscriptionData:any





  constructor(public router: Router, public apiList: ApiListService,  private fb: FormBuilder, public http: HttpFunctionListService ,
    public ClientInfluncerFunction: CommonClientService) { 
      this.talentData = this.fb.group({
        categoryselect: [],
   
      });
    }

  ngOnInit(): void {
      this.ClientInfluncerFunction.clientData.subscribe((res:any)=>{
        this.clientprofileData = res
        this.subscriptionData = res?.user?.subscription
     console.log(this.clientprofileData)
        })
 
    this.categorieslist();
  
  }

  categorieslist(){
    this.http.get(this.apiList.categoryList).subscribe((res: any) => {
      console.log(res)
      if (res.statusCode == 200) {
        this.categories = res.data.categories
        console.log(this.categories);
        this.alltalents()
        
      }
    }, error => {

    })
  }

  // talentdata(){
  //   this.http.get(this.apiList.categoryList).subscribe((res: any) => {
  //     console.log(res)
  //     if (res.statusCode == 200) {
  //       this.categories = res.data.categories
  //       console.log(this.categories);
        
  //     }
  //   }, error => {

  //   })
  // }

  saveChanges() {
    for(var i=0; i<this.select_interset.length; ++i) {
      for(var j=i+1; j<this.select_interset.length; ++j) {
          if(this.select_interset[i] === this.select_interset[j])
              this.select_interset.splice(j--, 1);
      }
  }
    let data = {
      categories:this.select_interset
    }
    this.http.post(this.apiList.talentList, data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        console.log("talent",res);
       this.talents = res.data.talents
       console.log("this.talents",this.talents);
       $('#filter_modal').modal('hide');
      }
    }, error => {

    })
  }

  select(event: any, value: any) {
    if (event.target.checked) {
      this.select_interset.push(value)
    } else {
      let index = this.removeCheckedFromArray(value);
      this.select_interset.splice(index, 1);
    }
  }

  removeCheckedFromArray(checkbox: String) {
    return this.select_interset.findIndex((category) => {
      return category === checkbox;
    })
  }

  alltalents(){
    let data = {
      categories:this.categories
    }
    this.http.post(this.apiList.talentList, data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        console.log("talent",res);
       this.talents = res.data.talents
       console.log("this.talents",this.talents);
       $('#filter_modal').modal('hide');
      }
    }, error => {

    })

  }

  getSearchTalent(){
    console.log(this.name)
    this.http.get(this.apiList.searchTalent+'?name='+this.name).subscribe((res:any)=>{
      console.log(res)
     if (res.statusCode == 200) {
       this.talents = res.data.talents
     
     }
   },error=>{})
 }

 talentDetails(id){
  this.router.navigate(['/client-talent-details', {id: id}])
}


}
