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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
var auth_service_1 = require('./services/auth/auth.service');
var app_component_1 = require('./app.component');
var home_component_1 = require('./components/home/home.component');
var profile_component_1 = require('./components/profile/profile.component');
var profile_show_component_1 = require('./components/profile/profile_show.component');
var profile_edit_component_1 = require('./components/profile/profile_edit.component');
var product_list_component_1 = require('./components/product-list/product-list.component');
var product_detail_component_1 = require('./components/product-detail/product-detail.component');
var product_upload_component_1 = require('./components/product-upload/product-upload.component');
var product_edit_component_1 = require('./components/product-edit/product-edit.component');
var navbar_component_1 = require('./components/navbar/navbar.component');
var foot_component_1 = require('./components/foot/foot.component');
var parallax_component_1 = require('./components/parallax/parallax.component');
var parallax_profile_component_1 = require('./components/parallax-profile/parallax-profile.component');
var product_profile_component_1 = require('./components/product-profile/product-profile.component');
var user_profile_component_1 = require('./components/user-profile/user-profile.component');
var parallax_userprofile_component_1 = require('./components/parallax-userprofile/parallax-userprofile.component');
var product_electronics_component_1 = require('./components/product-electronics/product-electronics.component');
var product_videogames_component_1 = require('./components/product-videogames/product-videogames.component');
var product_furniture_component_1 = require('./components/product-furniture/product-furniture.component');
var product_sports_component_1 = require('./components/product-sports/product-sports.component');
var product_clothes_componet_1 = require('./components/product-clothes/product-clothes.componet');
var app_routes_1 = require('./app.routes');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                profile_component_1.ProfileComponent,
                profile_show_component_1.ProfileShow,
                profile_edit_component_1.ProfileEdit,
                product_list_component_1.ProductListComponent,
                product_detail_component_1.ProductDetailComponent,
                product_upload_component_1.ProductUploadComponent,
                product_edit_component_1.ProductEditComponent,
                navbar_component_1.NavbarComponent,
                foot_component_1.FootComponent,
                parallax_component_1.ParallaxComponent,
                parallax_profile_component_1.ParallaxProfileComponent,
                product_profile_component_1.ProductProfileComponent,
                user_profile_component_1.UserProfileComponent,
                parallax_userprofile_component_1.ParallaxUserprofileComponent,
                product_electronics_component_1.ProductElectronicsComponent,
                product_videogames_component_1.ProductVideogamesComponent,
                product_furniture_component_1.ProductFurnitureComponent,
                product_sports_component_1.ProductSportsComponent,
                product_clothes_componet_1.ProductClothesComponent
            ],
            providers: [
                app_routes_1.appRoutingProviders,
                angular2_jwt_1.AUTH_PROVIDERS,
                auth_service_1.Auth
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.routing,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule
            ],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map