import { Component } from '@angular/core';
import { Auth }      from '../../services/auth/auth.service';

@Component({
  selector: 'home',
  templateUrl: './app/components/home/home.template.html'
})

export class HomeComponent {
  constructor(private auth: Auth) {}
};
