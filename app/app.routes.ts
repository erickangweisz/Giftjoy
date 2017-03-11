import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { HomeComponent }               from './components/home/home.component';
import { ProfileRoutes }               from './components/profile/profile.routes';
import { ProductDetailComponent }      from './components/product-detail/product-detail.component';
import { ProductUploadComponent }      from './components/product-upload/product-upload.component';
import { ProductEditComponent }        from './components/product-edit/product-edit.component';
import { UserProfileComponent }        from './components/user-profile/user-profile.component';
import { ProductElectronicsComponent }    from './components/product-electronics/product-electronics.component';
import { ProductVideogamesComponent }    from './components/product-videogames/product-videogames.component';
import { ProductFurnitureComponent }    from './components/product-furniture/product-furniture.component';
import { ProductSportsComponent }      from './components/product-sports/product-sports.component';
import { ProductClothesComponent }      from './components/product-clothes/product-clothes.componet';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'product-upload', component: ProductUploadComponent },
  { path: 'product-edit/:id', component: ProductEditComponent },
  { path: 'user-profile/:client_id', component: UserProfileComponent },

  { path: 'product-electronics/:category', component: ProductElectronicsComponent },
  { path: 'product-videogames/:category', component: ProductVideogamesComponent },
  { path: 'product-furniture/:category', component: ProductFurnitureComponent },
  { path: 'product-sports/:category', component: ProductSportsComponent },
  { path: 'product-clothes/:category', component: ProductClothesComponent },
  ...ProfileRoutes, 
  { path: '**', redirectTo: '' },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
