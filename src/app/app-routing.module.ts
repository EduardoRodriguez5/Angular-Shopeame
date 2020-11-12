import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  {path: 'home-page', component: HomePageComponent},
  {path: 'products-page', component: ProductsPageComponent},
  {path: 'gestion-page', component: GestionPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
