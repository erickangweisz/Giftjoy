"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_service_1 = require('../../services/product/product.service');
var Product_1 = require('../../model/Product');
var router_1 = require('@angular/router');
var auth_service_1 = require('../../services/auth/auth.service');
var ProductUploadComponent = (function () {
    function ProductUploadComponent(activatedRoute, router, productService, auth) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.productService = productService;
        this.auth = auth;
        this.title = "upload a gift";
    }
    ProductUploadComponent.prototype.onsubmit = function () {
        var _this = this;
        this.productService.addProduct(this.product)
            .subscribe(function (response) {
            _this.status = response.status;
            if (status !== "success") {
                //alert ("server ERROR");
                _this.router.navigate(['']);
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("request error");
            }
        });
        this.router.navigate(['']);
    };
    ProductUploadComponent.prototype.ngOnInit = function () {
        $('select').material_select();
        console.log('user_id --> ' + this.auth.userProfile.user_id);
        this.product = new Product_1.Product(0, this.auth.userProfile.identities[0].user_id, this.auth.userProfile.nickname, "", "", "", "", "", "");
    };
    ProductUploadComponent.prototype.fileChangeEvent = function (fileInput) {
        var _this = this;
        this.filesToUpload = fileInput.target.files;
        this.makeFileRequest("http://localhost/restful/giftjoy-api.php/upload-file", [], this.filesToUpload).then(function (result) {
            _this.product.image = result['filename'];
            console.log(result['filename']);
        }, function (error) {
            console.log(error);
        });
    };
    // upload files to server
    ProductUploadComponent.prototype.makeFileRequest = function (url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    ProductUploadComponent = __decorate([
        core_1.Component({
            selector: 'product-upload',
            templateUrl: './app/components/product-upload/product-upload.template.html',
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, product_service_1.ProductService, auth_service_1.Auth])
    ], ProductUploadComponent);
    return ProductUploadComponent;
}());
exports.ProductUploadComponent = ProductUploadComponent;
//# sourceMappingURL=product-upload.component.js.map