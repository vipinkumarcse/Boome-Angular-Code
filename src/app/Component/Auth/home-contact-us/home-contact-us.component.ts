import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home-contact-us',
  templateUrl: './home-contact-us.component.html',
  styleUrls: ['./home-contact-us.component.css']
})
export class HomeContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#what_we_do_video").on('hidden.bs.modal', function (e) {
      $("#what_we_do_video iframe").attr("src", $("#what_we_do_video iframe").attr("src"));
  });

  }


}
