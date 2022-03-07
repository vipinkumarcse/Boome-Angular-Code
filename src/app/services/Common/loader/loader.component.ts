import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  loading: boolean = true;

  constructor(private loaderService: LoaderService) {

    this.loaderService.isLoading.subscribe((v) => {
     // console.log(v);
     // console.log("helllo loader")
      this.loading = v;
    });

  }
  ngOnInit() {
  }
}
