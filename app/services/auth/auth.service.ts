import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig }        from './auth.config';

import { Http, Headers }   from '@angular/http';

// Avoid name not found warnings
declare var Auth0Lock: any;
declare var $:any;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {
    additionalSignUpFields: [{
      name: "address",                              // required
      placeholder: "enter your address",            // required
      icon: "https://example.com/address_icon.png", // optional
      validator: function(value) {                  // optional
        // only accept addresses with more than 10 chars
        return value.length > 10;
      }
    }],
    theme: {
      logo: '/app/src/img/giftjoy2.png',
      primaryColor: '#3F51B5'
    },
    languageDictionary: {
      title: "giftjoy"
    }
  });

  //Store profile object in auth class
  userProfile: any;
  userid: string;
  category: string;

  accessToken: string;

  constructor(public _http: Http) {
    // Set userProfile attribute if already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        profile.user_metadata = profile.user_metadata || {};
        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
        localStorage.setItem('user_id', this.userProfile.identities[0].user_id);
      });
    });
  };

  public getuserid() {
    return this.userid;
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token and profile from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
  };

  public getAccessToken() {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://erikweisz.auth0.com/oauth/token",
      "method": "POST",
      "headers": {
        "content-type": "application/json"
      },
      "data": "{\"client_id\":\"IenZah8aIuoBeGPXqMCZBfQ2OOgCZTbA\",\"client_secret\":\"QrJ04zEEr4SrhRfBzG7cNxTCfRaXFXbx-EMJgt4uV5x8WEiwi38nGv4RRj6WygxW\",\"audience\":\"https://erikweisz.auth0.com/api/v2/\",\"grant_type\":\"client_credentials\"}"
    }

    $.ajax(settings).done(function (response) {
      this.accessToken = response;
      console.log('access_token -> ' + this.accessToken.access_token);
      localStorage.setItem('access_token', this.accessToken.access_token);
    });
  }

}
