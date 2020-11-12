import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderLogoComponent } from './shared/header/header-logo/header-logo.component';
import { HeaderNavComponent } from './shared/header/header-nav/header-nav.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';
import { ProductComponent } from './shared/product/product.component';
import { FormGestionComponent } from './shared/form-gestion/form-gestion.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    HeaderLogoComponent,
    HeaderNavComponent,
    ProductsPageComponent,
    GestionPageComponent,
    ProductComponent,
    FormGestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
