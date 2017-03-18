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
var router_1 = require('@angular/router');
var auth_service_1 = require('../../services/auth/auth.service');
var ProductDetailComponent = (function () {
    function ProductDetailComponent(activatedRoute, router, productService, auth) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.productService = productService;
        this.auth = auth;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductDetailComponent.prototype.getProducts = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.productService.getProduct(this.id).subscribe(function (result) {
            _this.product = result.data;
            _this.status = result.status;
            console.log(_this.product);
            if (_this.status !== "success") {
                _this.router.navigate(['']);
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("request error");
            }
        });
    };
    ProductDetailComponent.prototype.onDeleteConfirm = function (id) {
        this.confirm = id;
        $(document).ready(function () {
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
    };
    ProductDetailComponent.prototype.onCancelConfirm = function (id) {
        this.confirm = null;
    };
    ProductDetailComponent.prototype.onDeleteProduct = function (id) {
        var _this = this;
        this.productService.deleteProduct(id)
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
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'product-detail',
            templateUrl: './app/components/product-detail/product-detail.template.html',
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, product_service_1.ProductService, auth_service_1.Auth])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map