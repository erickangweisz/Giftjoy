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
var angular2_jwt_1 = require('angular2-jwt');
var auth_config_1 = require('../../services/auth/auth.config');
var UsersService = (function () {
    function UsersService(_http, authHttp) {
        this._http = _http;
        this.authHttp = authHttp;
    }
    UsersService.prototype.getUserList = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'));
        this.authHttp.get('https://' + auth_config_1.myConfig.domain + '/api/v2/users', headers)
            .subscribe(function (data) { return _this.userList = data; }, function (err) { return console.log(err); }, function () { return console.log('Request Complete'); });
    };
    UsersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map