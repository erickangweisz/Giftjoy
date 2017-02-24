import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../model/Product';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'product-detail',
  templateUrl: './app/components/product-detail/product-detail.template.html',
  providers: [ ProductService ]
})

export class ProductDetailComponent implements OnInit {

    public userId:any;

    public constructor(
        private activatedRoute:ActivatedRoute,
        private productService: ProductService
    ) {}

    ngOnInit() {
        // subscribe to router event
        this.activatedRoute.params.subscribe((params: Params) => {
            this.userId = params['id'];
            console.log(this.userId);
        });
    }

}