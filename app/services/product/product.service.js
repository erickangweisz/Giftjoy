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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var ProductService = (function () {
    function ProductService(_http) {
        this._http = _http;
    }
    ProductService.prototype.getProducts = function () {
        this._http.head("http://localhost:3000");
        return this._http.get('http://localhost/restful/giftjoy-api.php/products')
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProduct = function (id) {
        this._http.head("http://localhost:3000");
        return this._http.get('http://localhost/restful/giftjoy-api.php/products/' + id)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProductByUserId = function (user_id) {
        this._http.head("http://localhost:3000");
        return this._http.get('http://localhost/restful/giftjoy-api.php/productsbyclientid/' + user_id)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProductByCategory = function (category) {
        this._http.head("http://localhost:3000");
        return this._http.get('http://localhost/restful/giftjoy-api.php/productsbycategory/' + category)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.addProduct = function (product) {
        var json = JSON.stringify(product);
        var params = "json=" + json;
        var headers = new http_1.Headers({ "Content-type": "application/x-www-form-urlencoded" });
        return this._http.post('http://localhost/restful/giftjoy-api.php/products', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.editProduct = function (id, product) {
        var json = JSON.stringify(product);
        var params = "json=" + json;
        var headers = new http_1.Headers({ "Content-type": "application/x-www-form-urlencoded" });
        return this._http.post('http://localhost/restful/giftjoy-api.php/update-product/' + id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.deleteProduct = function (id) {
        this._http.head("http://localhost:3000");
        return this._http.get('http://localhost/restful/giftjoy-api.php/delete-product/' + id)
            .map(function (res) { return res.json(); });
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map