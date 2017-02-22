import { Component }         from '@angular/core';
import { Auth }              from '../../services/auth/auth.service';

@Component({
  selector: 'profile_show',
  templateUrl: 'app/components/profile/profile_show.template.html'
})

export class ProfileShow {
  constructor(private auth: Auth) {}
};
