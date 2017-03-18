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
var auth_service_1 = require('../../services/auth/auth.service');
var router_1 = require('@angular/router');
var ProductListComponent = (function () {
    function ProductListComponent(_productService, auth, router) {
        this._productService = _productService;
        this.auth = auth;
        this.router = router;
        //console.log('auth en product-list -> ' + this.auth.userProfile.identities[0].user_id);
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.router.navigate[''];
    };
    ProductListComponent.prototype.getClientID = function () {
        //console.log('getClientID() --> ' + this.auth.getuserid());
        return localStorage.getItem('user_id');
    };
    ProductListComponent.prototype.getUserID = function () {
        //console.log('getUserID() --> ' + this.auth.userProfile.identities[0].user_id);
        return this.auth.userProfile.identities[0].user_id;
    };
    ProductListComponent.prototype.getProducts = function () {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (result) {
            console.log(result.data);
            _this.products = result.data;
            _this.status = result.status;
            if (_this.status !== "success") {
                alert("server error");
            }
            else {
                $(document).ready(function () {
                    $('#blog-landing').pinterest_grid({
                        no_columns: 5,
                        padding_x: 10,
                        padding_y: 10,
                        margin_bottom: 50,
                        single_column_breakpoint: 700
                    });
                });
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("request error");
            }
        });
    };
    ProductListComponent.prototype.onDeleteConfirm = function (id) {
        this.confirm = id;
        $(document).ready(function () {
            $('#blog-landing').pinterest_grid({
                no_columns: 5,
                padding_x: 10,
                padding_y: 10,
                margin_bottom: 50,
                single_column_breakpoint: 700
            });
        });
        this.router.navigate(['']);
        this.router.navigate(['']);
    };
    ProductListComponent.prototype.onCancelConfirm = function (id) {
        this.confirm = null;
    };
    ProductListComponent.prototype.onDeleteProduct = function (id) {
        var _this = this;
        this._productService.deleteProduct(id)
            .subscribe(function (result) {
            _this.status = result.status;
            if (_this.status !== "success") {
                alert("server error");
            }
            _this.getProducts();
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("request error");
            }
        });
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'product-list',
            templateUrl: './app/components/product-list/product-list.template.html',
            styleUrls: ['./app/components/product-list/product-list.component.css'],
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, auth_service_1.Auth, router_1.Router])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
;
//# sourceMappingURL=product-list.component.js.map