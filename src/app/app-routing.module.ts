import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from'./components/home/home/home.component'
import { RelevantproductsComponent } from'./containers/relevantproduct/relevantproducts/relevantproducts.component';

import { MattressComponent } from './containers/ourmattress/mattress/mattress.component';
import { BedframeComponent } from './containers/ourbedframe/bedframe/bedframe.component';
import { LoggedComponent } from './containers/user/login/logged.component';
import { RegisterComponent } from './containers/user/register/register.component';
import { AddproductsComponent } from './containers/toadd/addproducts/addproducts.component';



const routes: Routes = [
  {path:'productosdestacados', component: RelevantproductsComponent},
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'colchones', component:MattressComponent},
  {path: 'somieres', component:BedframeComponent},
  // {path:'colchones/:id', component:MattressComponent},
  // {path: 'somieres/:id', component:BedframeComponent},

  {path: 'login', component:LoggedComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'agregarProductos', component:AddproductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
