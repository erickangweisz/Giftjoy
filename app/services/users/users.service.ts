import { Injectable }               from '@angular/core';
import { Http, Response, Headers }  from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }               from 'rxjs/Observable';
import { Product }                  from '../../model/Product';

import { AuthHttp }                 from 'angular2-jwt';
import { myConfig }                 from '../../services/auth/auth.config';
import { Auth }                     from '../../services/auth/auth.service';


@Injectable()
export class UsersService {
    
    userList: any;

    constructor(private _http: Http,
                public authHttp: AuthHttp,
                public auth: Auth) {}

    getUserList() {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin','http://localhost:3000');
    // console.log('dentro de users.service::access_token -> ' + localStorage.getItem('access_token'))
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    
    this.authHttp.get('https://' + myConfig.domain + '/api/v2/users', headers)
      .subscribe(
        data => this.userList = data,
        err => console.log(err),
        () => console.log('Request Complete')
      );
    }
}