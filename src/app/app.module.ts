import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { DemoService } from './demo.service';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogEditComponent,
    BlogCreateComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent,pathMatch:"full"},
      // {path:'**',component:NotFoundComponent},
      {path:'home',component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'create',component:BlogCreateComponent},
      {path:'view/:id',component:BlogViewComponent},
    ])
  ],
  providers: [DemoService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
