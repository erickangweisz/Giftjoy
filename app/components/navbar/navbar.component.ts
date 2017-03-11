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
      $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
      }
    );
  }
  
};
