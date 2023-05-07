import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
