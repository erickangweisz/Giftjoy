import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { HomeComponent }               from './components/home/home.component';
import { ProfileRoutes }               from './components/profile/profile.routes';
import { ProductDetailComponent }      from './components/product-detail/product-detail.component';
import { ProductUploadComponent }      from './components/product-upload/product-upload.component';
import { ProductEditComponent }      from './components/product-edit/product-edit.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'product-upload', component: ProductUploadComponent },
  { path: 'product-edit/:id', component: ProductEditComponent },
  ...ProfileRoutes, 
  { path: '**', redirectTo: '' },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
