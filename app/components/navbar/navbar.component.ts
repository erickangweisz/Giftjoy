import { Component, OnInit } from '@angular/core';
import { Auth }      from '../../services/auth/auth.service';

declare var $:any;

@Component({
  selector: 'navbar',
  templateUrl: './app/components/navbar/navbar.template.html'
})

export class NavbarComponent implements OnInit {
  constructor(private auth: Auth) {}

  ngOnInit() {
    $(".button-collapse").sideNav();
  }
};
