"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home/home.component');
var profile_routes_1 = require('./components/profile/profile.routes');
var product_detail_component_1 = require('./components/product-detail/product-detail.component');
var product_upload_component_1 = require('./components/product-upload/product-upload.component');
var product_edit_component_1 = require('./components/product-edit/product-edit.component');
var user_profile_component_1 = require('./components/user-profile/user-profile.component');
var product_electronics_component_1 = require('./components/product-electronics/product-electronics.component');
var product_videogames_component_1 = require('./components/product-videogames/product-videogames.component');
var product_furniture_component_1 = require('./components/product-furniture/product-furniture.component');
var product_sports_component_1 = require('./components/product-sports/product-sports.component');
var product_clothes_componet_1 = require('./components/product-clothes/product-clothes.componet');
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'product/:id', component: product_detail_component_1.ProductDetailComponent },
    { path: 'product-upload', component: product_upload_component_1.ProductUploadComponent },
    { path: 'product-edit/:id', component: product_edit_component_1.ProductEditComponent },
    { path: 'user-profile/:client_id', component: user_profile_component_1.UserProfileComponent },
    { path: 'product-electronics/:category', component: product_electronics_component_1.ProductElectronicsComponent },
    { path: 'product-videogames/:category', component: product_videogames_component_1.ProductVideogamesComponent },
    { path: 'product-furniture/:category', component: product_furniture_component_1.ProductFurnitureComponent },
    { path: 'product-sports/:category', component: product_sports_component_1.ProductSportsComponent },
    { path: 'product-clothes/:category', component: product_clothes_componet_1.ProductClothesComponent }
].concat(profile_routes_1.ProfileRoutes, [
    { path: '**', redirectTo: '' },
]);
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map