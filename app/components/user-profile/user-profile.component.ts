import { Component }         from '@angular/core';
import { Auth }              from '../../services/auth/auth.service';

@Component({
  selector: 'user-profile',
  templateUrl: 'app/components/user-profile/user-profile.template.html',
  styleUrls: ['app/components/user-profile/user-profile.component.css']
})

export class UserProfileComponent {
  constructor(private auth: Auth) {}
}; 
