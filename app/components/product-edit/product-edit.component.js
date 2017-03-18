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
var ProductEditComponent = (function () {
    function ProductEditComponent(activatedRoute, router, productService, auth) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.productService = productService;
        this.auth = auth;
        this.title = "edit gift";
    }
    ProductEditComponent.prototype.onsubmit = function () {
        var _this = this;
        this.productService.editProduct(this._id, this.product)
            .subscribe(function (response) {
            _this.status = response.status;
            if (status !== "success") {
            }
            else {
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
    ProductEditComponent.prototype.ngOnInit = function () {
        this.product = new Product_1.Product(parseInt(this._id), this.auth.userProfile.identities[0].user_id, this.auth.userProfile.nickname, "", "", "", "", "", "");
        this.getProduct();
    };
    ProductEditComponent.prototype.getProduct = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this._id = params['id'];
        });
        console.log('dentro de getProduct. id --> ' + this._id);
        this.productService.getProduct(this._id).subscribe(function (result) {
            _this.prod = result.data;
            _this.status = result.status;
            console.log(_this.prod);
            _this.product = new Product_1.Product(parseInt(_this._id), _this.prod['client_id'], _this.prod['nickname'], _this.prod['title'], _this.prod['description'], _this.prod['location'], _this.prod['image'], _this.prod['category'], _this.prod['telephone']);
            if (_this.status != "success") {
                _this.router.navigate(['']);
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                alert("request error");
            }
        });
    };
    ProductEditComponent.prototype.fileChangeEvent = function (fileInput) {
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
    ProductEditComponent.prototype.makeFileRequest = function (url, params, files) {
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
    ProductEditComponent = __decorate([
        core_1.Component({
            selector: 'product-edit',
            templateUrl: './app/components/product-edit/product-edit.template.html',
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, product_service_1.ProductService, auth_service_1.Auth])
    ], ProductEditComponent);
    return ProductEditComponent;
}());
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=product-edit.component.js.map