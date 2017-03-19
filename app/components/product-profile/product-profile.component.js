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
var users_service_1 = require('../../services/users/users.service');
var auth_service_1 = require('../../services/auth/auth.service');
var router_1 = require('@angular/router');
var ProductProfileComponent = (function () {
    function ProductProfileComponent(_productService, _usersService, auth, router) {
        this._productService = _productService;
        this._usersService = _usersService;
        this.auth = auth;
        this.router = router;
    }
    ProductProfileComponent.prototype.ngOnInit = function () {
        this.getProductByUserId();
        this.getUsersList();
        //this.router.navigate[''];
    };
    ProductProfileComponent.prototype.getClientID = function () {
        return this.auth.userProfile.identities[0].user_id;
    };
    ProductProfileComponent.prototype.getUsersList = function () {
        this._usersService.getUserList();
        console.log('Se ha llamado a getUserList()');
    };
    ProductProfileComponent.prototype.getProductByUserId = function () {
        var _this = this;
        this._productService.getProductByUserId(this.getClientID())
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
    ProductProfileComponent.prototype.onDeleteConfirm = function (id) {
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
    ProductProfileComponent.prototype.onCancelConfirm = function (id) {
        this.confirm = null;
    };
    ProductProfileComponent.prototype.onDeleteProduct = function (id) {
        var _this = this;
        this._productService.deleteProduct(id)
            .subscribe(function (result) {
            _this.status = result.status;
            if (_this.status !== "success") {
                alert("server error");
            }
            _this.getProductByUserId();
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("request error");
            }
        });
    };
    ProductProfileComponent = __decorate([
        core_1.Component({
            selector: 'product-profile',
            templateUrl: './app/components/product-profile/product-profile.template.html',
            styleUrls: ['./app/components/product-profile/product-profile.component.css'],
            providers: [product_service_1.ProductService, users_service_1.UsersService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, users_service_1.UsersService, auth_service_1.Auth, router_1.Router])
    ], ProductProfileComponent);
    return ProductProfileComponent;
}());
exports.ProductProfileComponent = ProductProfileComponent;
//# sourceMappingURL=product-profile.component.js.map