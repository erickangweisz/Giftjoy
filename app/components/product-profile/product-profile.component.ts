import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../model/Product';
import { Auth } from '../../services/auth/auth.service';

declare var $:any;

@Component({
  selector: 'product-profile',
  templateUrl: './app/components/product-profile/product-profile.template.html',
  styleUrls: ['./app/components/product-profile/product-profile.component.css'],
  providers: [ ProductService ]
})

export class ProductProfileComponent implements OnInit {

    public products: Product[];
    public status:string;
    public errorMessage:any;
    public confirm;

    constructor(private _productService: ProductService,
                private auth: Auth) {}

    ngOnInit() { 
        this.getProductByUserId();
    }

    getClientID() {
        return this.auth.getuserid();
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
                                                no_columns: 4,
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

}