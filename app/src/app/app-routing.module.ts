import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstimatesPageComponent } from './pages/estimates-page/estimates-page.component';
import { EstimatePageComponent } from './pages/estimate-page/estimate-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { CreateEstimatePageComponent } from './pages/create-estimate-page/create-estimate-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'estimates', component: EstimatesPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'estimate', component: EstimatePageComponent },
  { path: 'create', component: CreateEstimatePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
