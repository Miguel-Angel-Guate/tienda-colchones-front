import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from'./components/home/home/home.component'
import { SidenavComponent } from'./components/sidenav/sidenav/sidenav.component'
import { RelevantproductsComponent } from'./containers/relevantproduct/relevantproducts/relevantproducts.component';

import { from } from 'rxjs';


const routes: Routes = [
  {path:'productosdestacados', component: RelevantproductsComponent},
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
