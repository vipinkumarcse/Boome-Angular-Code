import { Component, OnInit, ViewChild  } from '@angular/core';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { Common_FunctionService } from '../CommonInfluncer/common-function.service';
import { DatePipe } from '@angular/common';

 import { Chart, registerables } from 'chart.js';
 import { ChartType } from 'chart.js';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
// import { MultiDataSet, Label } from 'ng2-charts';
import {  ChartComponent,  ApexAxisChartSeries,  ApexChart,  ApexXAxis,  ApexDataLabels,  ApexStroke,  ApexYAxis,  ApexTitleSubtitle,  ApexLegend, ApexFill} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
  fill: ApexFill;
};


 Chart.register(...registerables)
declare var $: any;
declare var jQuery: any


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  dataArray: any = [];


  topBar={name:'My Profile',icon:'assets/images/user_icn.svg', 
  // date:new Date()
  date : this.datePipe.transform( new Date(),'dd/MM/yyyy')
}
  // topBar={name:'My Profile',icon:'assets/images/user_icn.svg',date:new Date().getDate()+'/'+ new Date().getMonth() +'/'+ new Date().getFullYear()}
  profileData: any;
  addressData: any;
  data: any;
  posts:any = [];
  user:any ; 
  followerPercentIncrease :any
  followingPercentIncrease : any
  followerValueIncrease: any;
  followerCount: any;
  followerPercent: number;
  followingValueIncrease: any;
  followingCount: any;
  followingPercent: number;
  donutChartData: any;
  follwers: any;
  follwings: any;
  followerpercent: string;
  followingpercent: string;
  engagementRate: any;


  // public doughnutChartType: ChartType = 'doughnut';

  constructor(public common:Common_FunctionService,
    private datePipe:DatePipe, public apiList: ApiListService,
    public messgae: MessageHandlingService,  public http: HttpFunctionListService) {
      this.influencerInfo();
     }

  ngOnInit(): void {
    this.common.subject.subscribe((res:any)=>{
      this.profileData = res
      })
      this.common.address.subscribe((res:any)=>{
        this.addressData = res
        }) 
        // this.areachart()
        
        this.engagementGraph();
  }

  engagementGraph(){
    this.chartOptions = {
      series: [
        {
          name: "STOCK ABC",
          data: [20, 50, 80, 20, 70, 40, 10]
        }
      ],
      chart: {
        type: "area",
        height: 300,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        colors: ['#009EFF'],
        width: 4
      },
      fill: {
        
           colors: ['#009EFF']
        // type: 'gradient',
        // gradient: {
        //   shadeIntensity: 1,
        //   opacityFrom: 0.1,
        //   opacityTo: 1,
        //   stops: [0],
          
        // },
      },

      labels: ['Jan', 'Fab', 'March', 'April', 'May', 'June', 'July'],
     
      legend: {
        horizontalAlign: "left"
      }
    };
  }


chartNew(){
const ctx = $('#myChart');
console.log(this.follwers);
console.log(this.follwings);
// var follower = this.follwers
// var following = this.follwings
//debugger
const myChart = new Chart(ctx, {
    type: 'doughnut',
   data : {
      labels: [ 
        'Followers', 'Following'
       ],
      datasets: [{
        label: 'My First Dataset',
        data: [ this.follwers , this.follwings],
        backgroundColor: [
          '#FE6290',
          '#009EFF'
        ],
        hoverOffset: 1,
        borderWidth: 0,
        hoverBorderWidth: 0,
        weight: 100
      }]
    },
    options: {
      responsive: true,
      cutout: 75,
      plugins: {
        legend: {
          position: 'top',
          display: false
        },
      }
    }
});
  }

  influencerInfo(){
    this.http.get(this.apiList.influncerInfo).subscribe((res:any) => {
      if(res.statusCode == 200){
      this.data = res.data;
     this.posts =  this.data.posts;
     this.user =  this.data.user
     this.followerPercent = this.data.user.socialAccount.instagram.data.followerPercentIncrease
     this.followingPercent = this.data.user.socialAccount.instagram.data.followingPercentIncrease
     this.engagementRate = this.data.user.socialAccount.instagram.data.engagementRate
  //  this.follwers =  Math.floor(this.followerPercent);
  //  this.follwings =  Math.floor(this.followingPercent);
  this.follwers =  this.followerPercent.toFixed(1) ;
  this.follwings =  this.followingPercent.toFixed(1) 
   console.log(this.follwers);
   console.log(this.follwings);
    //  this.followerValueIncrease = this.data.user.socialAccount.instagram.data.followerValueIncrease;
    //  this.followerCount = this.data.user.socialAccount.instagram.data.followerCount;
    // this.followerPercent =  ( this.followerValueIncrease / this.followerCount) * 100
     console.log(this.followerPercentIncrease);
    //  this.followingValueIncrease = this.data.user.socialAccount.instagram.data.followingValueIncrease ;
    //  this.followingCount = this.data.user.socialAccount.instagram.data.followingCount;
    //  this.followingPercent =  ( this.followingValueIncrease / this.followingCount) * 100
    this.chartNew();
      }
    },
    error => {
    })
  }

  areachart(){
    let data: any,
    options: any,
    chart: any,
    ctx: any = document.getElementById('areaChart') as HTMLElement;
  data = {
    labels: ['Apples', 'Oranges', 'Mixed Fruit'],
    datasets: [
      {
        label: 'Apples',
        data: [0, 50, 45, 100],
        backgroundColor: 'rgba(40,125,200,.5)',
        borderColor: 'rgb(40,100,200)',
        fill: true,
        lineTension: 0,
        radius: 5,
      },
      {
        label: 'Oranges',
        data: [30, 90, 111, 20],
        backgroundColor: 'rgba(75,10,125,.5)',
        borderColor: 'rgb(75,10,125)',
        fill: true,
        lineTension: 0.2,
        radius: 5,
      },
    ],
  };

  options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      position: 'top',
      text: 'Apples to Oranges',
      fontSize: 12,
      fontColor: '#666',
    },
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontColor: '#999',
        fontSize: 14,
      },
    },
  };

  chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options,
  });
  }


  unsavePost(id:any){
    this.http.get(this.apiList.unsaveCompaignPost + id).subscribe((res:any) => {
      if(res.statusCode == 200){
      this.influencerInfo()
      this.messgae.success(res.message)
      
      }
      
    },
    error => {

    }
    )

  }

}
