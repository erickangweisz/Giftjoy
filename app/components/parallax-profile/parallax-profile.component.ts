import { Component, OnInit } from '@angular/core';
import { Auth }              from '../../services/auth/auth.service';

declare var $:any;

@Component({
  selector: 'parallax-profile',
  templateUrl: './app/components/parallax-profile/parallax-profile.template.html',
  styleUrls: ['./app/components/parallax-profile/parallax-profile.component.css']
})

export class ParallaxProfileComponent implements OnInit {
  constructor(private auth: Auth) {}

  ngOnInit() {
    $(document).ready(function() {
        $('.parallax').parallax();
    });
  }
};