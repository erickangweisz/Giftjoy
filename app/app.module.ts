import { NgModule }            from '@angular/core';
import { BrowserModule  }      from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { AppComponent }        from './app.component';
import { HomeComponent }       from './components/home/home.component';
import { ProfileComponent }    from './components/profile/profile.component';
import { ProfileShow }         from './components/profile/profile_show.component';
import { ProfileEdit }         from './components/profile/profile_edit.component';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductUploadComponent } from './components/product-upload/product-upload.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

import { NavbarComponent }      from './components/navbar/navbar.component';
import { FootComponent}         from './components/foot/foot.component';

import { routing,
         appRoutingProviders } from './app.routes';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProfileComponent,
        ProfileShow,
        ProfileEdit,
        ProductListComponent,
        ProductDetailComponent,
        ProductUploadComponent,
        ProductEditComponent,
        NavbarComponent,
        FootComponent
    ],
    providers:    [
        appRoutingProviders,
        AUTH_PROVIDERS
    ],
    imports:      [
        BrowserModule,
        routing,
        FormsModule,
        HttpModule,
        JsonpModule
    ],
    bootstrap:    [AppComponent],
})
export class AppModule {}
