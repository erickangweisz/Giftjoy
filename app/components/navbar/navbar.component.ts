import { Component } from '@angular/core';
import { Auth }      from '../../services/auth/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './app/components/navbar/navbar.template.html'
})

export class NavbarComponent {
  constructor(private auth: Auth) {}
};
