import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../model/Product';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Auth } from '../../services/auth/auth.service';

declare var $:any;

@Component({
  selector: 'product-upload',
  templateUrl: './app/components/product-upload/product-upload.template.html',
  providers: [ ProductService ]
})

export class ProductUploadComponent implements OnInit {

    public id: string;
    public title = "upload a gift";
    public product: Product;
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
        this.productService.addProduct(this.product)
            .subscribe(
                response => {
                    this.status = response.status;
                    if (status !== "success") {
                        //alert ("server ERROR");
                        this.router.navigate(['']);
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
        $('select').material_select();
        console.log('user_id --> ' + this.auth.userProfile.user_id);

        this.product = new Product(
            0, 
            this.auth.userProfile.user_id,
            "",
            "",
            "",
            "",
            "",
            ""
        );
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