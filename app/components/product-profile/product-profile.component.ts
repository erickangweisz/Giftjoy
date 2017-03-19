import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';

import { UsersService } from '../../services/users/users.service';

import { Product } from '../../model/Product';

import { Auth } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'product-profile',
  templateUrl: './app/components/product-profile/product-profile.template.html',
  styleUrls: ['./app/components/product-profile/product-profile.component.css'],
  providers: [ ProductService, UsersService ]
})

export class ProductProfileComponent implements OnInit {

    public products: Product[];

    public status:string;
    public errorMessage:any;
    public confirm;

    constructor(private _productService: ProductService,
                private _usersService: UsersService,
                private auth: Auth,
                private router: Router) {}

    ngOnInit() { 
        this.getProductByUserId();
        this.getUsersList();
        //this.router.navigate[''];
    }

    getClientID() {
        return this.auth.userProfile.identities[0].user_id;
    }

    getUsersList() {
        this._usersService.getUserList();
        console.log('Se ha llamado a getUserList()');
    }

    getProductByUserId() {
      this._productService.getProductByUserId(this.getClientID())
                            .subscribe(
                                result => {
                                    console.log(result.data);
                                    this.products = result.data; 
                                    this.status = result.status;

                                    if (this.status !== "success") {
                                        alert("server error");
                                    } else {
                                        $(document).ready(function() {
                                            $('#blog-landing').pinterest_grid({
                                                no_columns: 5,
                                                padding_x: 10,
                                                padding_y: 10,
                                                margin_bottom: 50,
                                                single_column_breakpoint: 700
                                            });
                                        });
                                    }
                                }, 
                                error => {
                                    this.errorMessage = <any>error;
                                    if (this.errorMessage !== null) {
                                        console.log(this.errorMessage);
                                        alert("request error");
                                    }
                                });
    }

    onDeleteConfirm(id: string) {
        this.confirm = id;
        $(document).ready(function() {
            $('#blog-landing').pinterest_grid({
                no_columns: 5,
                padding_x: 10,
                padding_y: 10,
                margin_bottom: 50,
                single_column_breakpoint: 700
            });
        });
        this.router.navigate(['']);
        this.router.navigate(['']);
    }

    onCancelConfirm(id: string) {
        this.confirm = null;
    }

    onDeleteProduct(id: string) {
        this._productService.deleteProduct(id)
                    .subscribe(
                        result => {
                            this.status = result.status;
                            if (this.status !== "success") {
                                alert("server error");
                            }
                            this.getProductByUserId();
                        }, 
                        error => {
                            this.errorMessage = <any>error;
                            if (this.errorMessage !== null) {
                                console.log(this.errorMessage);
                                alert("request error");
                            }
                        });
    }

}