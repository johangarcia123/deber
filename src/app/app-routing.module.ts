import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoryComponent } from './pages/category/category.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {ErrorComponent } from './notfound/error/error.component';

const routes: Routes = [
//pages
  {path: 'dashboard', component: DashboardComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'category', component: CategoryComponent},

//auth
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

//Error

  {path: '**', component: ErrorComponent},
  {path: '', redirectTo:'./dashboard', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
