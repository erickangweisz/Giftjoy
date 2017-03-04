import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../model/Product';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Auth } from '../../services/auth/auth.service';

@Component({
  selector: 'product-edit',
  templateUrl: './app/components/product-edit/product-edit.template.html',
  providers: [ ProductService ]
})

export class ProductEditComponent implements OnInit {

    public _id: string;
    public _user_id: string;
    public _title: string;
    public _description: string;
    public _location: string;
    public _image: string;
    public _category: string;

    public title = "edit gift";
    public product: Product;
    public prod: Product[];
    public status:string;
    public errorMessage:any;

    public filesToUpload: Array<File>;

    public constructor(
        private activatedRoute:ActivatedRoute,
        private router: Router,
        private productService: ProductService,
        private auth: Auth
    ) {}

    onsubmit() {
        this.productService.editProduct(this._id, this.product)
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
            this.router.navigate(['']);
            this.router.navigate(['']);
    }

    ngOnInit() {
        this.product = new Product(
            parseInt(this._id),
            this.auth.userProfile.user_id, 
            "",
            "",
            "",
            "",
            "",
            ""
        );
        this.getProduct();
    }

    getProduct() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this._id = params['id'];
        });
        console.log('dentro de getProduct. id --> ' + this._id);
        this.productService.getProduct(this._id).subscribe(
            result => {
                this.prod = result.data;
                this.status = result.status;
                console.log(this.prod);

                this.product = new Product(
                    parseInt(this._id),
                    this.prod['user_id'], 
                    this.prod['title'],
                    this.prod['description'],
                    this.prod['location'],
                    this.prod['image'],
                    this.prod['category'],
                    this.prod['telephone']
                );

                if (this.status != "success") {
                    this.router.navigate(['']);
                }
            },
            error => {
                this.errorMessage = <any>error;
                if (this.errorMessage !== null) {
                    alert("request error");
                }
            });
    }

    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>> fileInput.target.files;
        this.makeFileRequest("http://localhost/api-rest/giftjoy-api.php/upload-file", [], 
        this.filesToUpload).then((result) => {
            this.product.image = result['filename'];
            console.log(result['filename']);
        }, (error) => {
            console.log(error);
        });
    }

    // upload files to server
    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();

            for (var i=0; i<files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }

            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }

}