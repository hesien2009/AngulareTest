import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { DbservicesService } from './dbservices.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReduceSentencePipe } from './CustomPipes/reduce-sentence.pipe';
import { CategoryComponentComponent } from './Category/category-component/category-component.component';
import { InputFormatDirective } from './input-format.directive';
import { LoginReactiveComponent } from './login/login-reactive/login-reactive.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TodolistComponent } from './todolist/todolist.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    ReduceSentencePipe,
    CategoryComponentComponent,
    InputFormatDirective,
    LoginReactiveComponent,
    NavBarComponent,
    HomeComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [DbservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
