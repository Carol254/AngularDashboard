import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SideNavComponent } from './main/side-nav/side-nav.component';
import { ContentNavComponent } from './main/content-nav/content-nav.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ProductsComponent } from './main/products/products.component';
import { SalesComponent } from './main/sales/sales.component';
import { PurchasesComponent } from './main/purchases/purchases.component';
import { AnalyticsComponent } from './main/analytics/analytics.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';


const routes:Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'products',component:ProductsComponent,
    children:[{
        path:'product-details',
        component:ProductDetailsComponent,
      },
    ],
  },
  {path:'sales',component:SalesComponent},
  {path:'purchases',component:PurchasesComponent},
  {path:'analytics',component:AnalyticsComponent},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideNavComponent,
    ContentNavComponent,
    DashboardComponent,
    ProductsComponent,
    SalesComponent,
    PurchasesComponent,
    AnalyticsComponent,
    PageNotFoundComponent,
    ProductDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [
    provideRouter(routes,withComponentInputBinding())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
