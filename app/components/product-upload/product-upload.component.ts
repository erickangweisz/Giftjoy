import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../model/Product';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'product-upload',
  templateUrl: './app/components/product-upload/product-upload.template.html',
  providers: [ ProductService ]
})

export class ProductUploadComponent implements OnInit {

    public id: string;
    //public product: Product[];
    public product: Product;
    public status:string;
    public errorMessage:any;

    public constructor(
        private activatedRoute:ActivatedRoute,
        private router: Router,
        private productService: ProductService
    ) {}

    onsubmit() {
            this.productService.addProduct(this.product)
                .subscribe(
                    response => {
                        this.status = response.status;
                        if (status !== "success") {
                            //alert ("server ERROR");
                        }
                    },
                    error => {
                        this.errorMessage = <any>error;
                        if (this.errorMessage !== null) {
                            console.log(this.errorMessage);
                            alert("request error");
                        }
                    }
                );
                this.router.navigate(['']);
    }

    ngOnInit() {
        //this.getProduct();
        this.product = new Product(
            0, 
            "",
            "",
            "",
            "",
            ""
        );

        console.log("component product-upload success");
    }

    getProduct() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = params['id'];
        });
        this.productService.getProduct(this.id).subscribe(
            result => {
                this.product = result.data;
                this.status = result.status;
                console.log(this.product);

                if (this.status != "success") {
                    this.router.navigate(['']);
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