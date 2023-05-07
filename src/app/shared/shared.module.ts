import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SiderComponent } from './sider/sider.component';



@NgModule({
  declarations: [
    NavComponent,
    SiderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
