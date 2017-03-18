import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../model/Product';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Auth } from '../../services/auth/auth.service';

declare var $:any;

@Component({
  selector: 'product-detail',
  templateUrl: './app/components/product-detail/product-detail.template.html',
  providers: [ ProductService ]
})

export class ProductDetailComponent implements OnInit {

    public id: string;
    public product: Product[];
    public status:string;
    public errorMessage:any;
    public confirm;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private productService: ProductService,
        private auth: Auth
    ) {}

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = params['id'];
        });
        this.productService.getProduct(this.id).subscribe(
            result => {
                this.product = result.data;
                this.status = result.status;
                console.log(this.product);

                if (this.status !== "success") {
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

    onDeleteConfirm(id: string) {
    this.confirm = id;
    $(document).ready(function() {
        $('#blog-landing').pinterest_grid({
            no_columns: 4,
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
      this.productService.deleteProduct(id)
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

}