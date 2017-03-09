import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'parallax-userprofile',
  templateUrl: './app/components/parallax-userprofile/parallax-userprofile.template.html'
})

export class ParallaxUserprofileComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(document).ready(function() {
        $('.parallax').parallax();
    });
  }
};