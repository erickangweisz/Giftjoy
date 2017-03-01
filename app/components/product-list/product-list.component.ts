import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../model/Product';

import { Auth } from '../../services/auth/auth.service';

declare var $:any;

@Component({
  selector: 'product-list',
  templateUrl: './app/components/product-list/product-list.template.html',
  styleUrls: ['./app/components/product-list/product-list.component.css'],
  providers: [ ProductService ]
})

export class ProductListComponent implements OnInit {
  public products: Product[];
  public status:string;
  public errorMessage:any;
  public confirm;

  constructor(private _productService: ProductService,
              private auth: Auth) {}

  ngOnInit() { 
       this.getProducts(); 
  }

  getProducts() {
      this._productService.getProducts()
                            .subscribe(
                                result => {
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

  onDeleteConfirm(id: string) {
    this.confirm = id;
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
                        this.getProducts();
                    }, 
                    error => {
                        this.errorMessage = <any>error;
                        if (this.errorMessage !== null) {
                            console.log(this.errorMessage);
                            alert("request error");
                        }
                    });
  }

};
