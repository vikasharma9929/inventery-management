import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from './home.routing.module';





const routes: Routes = [
  { path: 'inventry_category', component: CategoryComponent},
];

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
