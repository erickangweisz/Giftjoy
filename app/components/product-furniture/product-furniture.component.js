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
var ProductFurnitureComponent = (function () {
    function ProductFurnitureComponent(_productService, auth, router) {
        this._productService = _productService;
        this.auth = auth;
        this.router = router;
    }
    ProductFurnitureComponent.prototype.ngOnInit = function () {
        this.getProductByFurniture();
    };
    ProductFurnitureComponent.prototype.getClientID = function () {
        return localStorage.getItem('user_id');
    };
    ProductFurnitureComponent.prototype.getProductByFurniture = function () {
        var _this = this;
        this._productService.getProductByCategory('"furniture"')
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
    ProductFurnitureComponent = __decorate([
        core_1.Component({
            selector: 'product-furniture',
            templateUrl: './app/components/product-furniture/product-furniture.template.html',
            styleUrls: ['./app/components/product-furniture/product-furniture.component.css'],
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, auth_service_1.Auth, router_1.Router])
    ], ProductFurnitureComponent);
    return ProductFurnitureComponent;
}());
exports.ProductFurnitureComponent = ProductFurnitureComponent;
//# sourceMappingURL=product-furniture.component.js.map