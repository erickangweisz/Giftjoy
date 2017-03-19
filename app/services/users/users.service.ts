import { Injectable }               from '@angular/core';
import { Http, Response, Headers }  from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }               from 'rxjs/Observable';
import { Product }                  from '../../model/Product';

import { AuthHttp }                 from 'angular2-jwt';
import { myConfig }                 from '../../services/auth/auth.config';


@Injectable()
export class UsersService {
    
    userList: any;

    constructor(private _http: Http,
                public authHttp: AuthHttp) {}

    getUserList() {

    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin','http://localhost:3000');
    headers.append('Authorization','Bearer ' + localStorage.getItem('id_token'));
    
    this.authHttp.get('https://' + myConfig.domain + '/api/v2/users', headers)
      .subscribe(
        data => this.userList = data,
        err => console.log(err),
        () => console.log('Request Complete')
      );
    }
}