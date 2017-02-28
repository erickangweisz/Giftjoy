import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'parallax',
  templateUrl: './app/components/parallax/parallax.template.html'
})

export class ParallaxComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(document).ready(function() {
        $('.parallax').parallax();
    });
  }
};
