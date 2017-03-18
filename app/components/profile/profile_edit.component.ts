import { Component, OnInit }            from '@angular/core';
import { Http } from '@angular/http';
import { Auth }                 from '../../services/auth/auth.service';
import { AuthHttp }             from 'angular2-jwt';
import { Router }               from '@angular/router';
import 'rxjs/add/operator/map';
import { myConfig }             from '../../services/auth/auth.config';

@Component({
  selector: 'profile',
  templateUrl: 'app/components/profile/profile_edit.template.html'
})

export class ProfileEdit {
  address: String
  constructor(private auth: Auth, private authHttp: AuthHttp, private router: Router) {
    if(auth.userProfile.user_metadata && auth.userProfile.user_metadata.address){
      this.address = auth.userProfile.user_metadata.address;
    }
  }

  ngOnInit() {
    //this.getUserList();
  }

  /*getUserList() {
    var headers: any = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "typ": "JWT",
      "alg": "RS256",
      "kid": "NDJEOTlEREMzRUE3MkNGRUFCMThFMEU5NENDMjlCN0NCRUJBN0VCNQ",
      'Access-Control-Allow-Origin':'http://localhost:3000',
      'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE'
    };

    this.authHttp
      .get('https://' + myConfig.domain + '/api/v2/users', {headers: headers})
      .map(response => response.json())
      .subscribe(
        response => {
          console.log('USERLIST! -> ' + response)
        },
        error => alert(error.json().message)
      );
  }*/

  onSubmit() {
    var headers: any = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var data: any = JSON.stringify({
      user_metadata: {
        address: this.address
      }
    });

    this.authHttp
      .patch('https://' + myConfig.domain + '/api/v2/users/' + this.auth.userProfile.user_id, data, {headers: headers})
      .map(response => response.json())
      .subscribe(
        response => {
          this.auth.userProfile = response;
          localStorage.setItem('profile', JSON.stringify(response));
          this.router.navigate(['/profile']);
        },
        error => alert(error.json().message)
      );
  }
}
