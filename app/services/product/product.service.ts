import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../model/Product';

@Injectable()
export class ProductService {
    constructor(private _http: Http) {}

    getProducts() {
        this._http.head("*");

        return this._http.get('http://localhost/api-rest/gitjoyy-api.php/products')
                            .map(res => res.json());
    }
}