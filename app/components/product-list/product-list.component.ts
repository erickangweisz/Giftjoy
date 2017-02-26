import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../model/Product';

import { Auth } from '../../services/auth/auth.service';

@Component({
  selector: 'product-list',
  templateUrl: './app/components/product-list/product-list.template.html',
  providers: [ ProductService ]
})

export class ProductListComponent implements OnInit {
  public title:string = "Product List:";
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
                                    console.log('product-list success');

                                    if (this.status !== "success") {
                                        alert("server error");
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
