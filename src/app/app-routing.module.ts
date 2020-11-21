import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponentComponent } from './Category/category-component/category-component.component';
import { HomeComponent } from './home/home.component';
import { LoginReactiveComponent } from './login/login-reactive/login-reactive.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { TodolistComponent } from './todolist/todolist.component';


const routes: Routes = [
  {path:'Category/category-component',component : CategoryComponentComponent},
  {path:'login/login-reactive',component : LoginReactiveComponent},
  {path:'product-component',component : ProductComponentComponent},
  {path:'home',component : HomeComponent},
  {path:'todolist',component : TodolistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
