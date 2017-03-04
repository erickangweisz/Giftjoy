import { Component, Injectable } from '@angular/core';
import { Auth }      from '../../services/auth/auth.service';

@Component({
  selector: 'home',
  templateUrl: './app/components/home/home.template.html'
})

@Injectable()
export class HomeComponent {
  constructor(private auth: Auth) {}
};
