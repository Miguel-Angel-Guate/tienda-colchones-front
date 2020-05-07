import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from'./components/home/home/home.component'
import { SidenavComponent } from'./components/sidenav/sidenav/sidenav.component'
import { RelevantproductsComponent } from'./containers/relevantproduct/relevantproducts/relevantproducts.component';

import { from } from 'rxjs';
import { MattressComponent } from './containers/ourmattress/mattress/mattress.component';
import { BedframeComponent } from './containers/ourbedframe/bedframe/bedframe.component';
import { LoggedComponent } from './containers/log/logged/logged.component';



const routes: Routes = [
  {path:'productosdestacados', component: RelevantproductsComponent},
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'colchones', component:MattressComponent},
  {path: 'somiers', component:BedframeComponent},
  {path: 'login', component:LoggedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
