import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/home/home/home.component';
import { RelevantproductsComponent } from './containers/relevantproduct/relevantproducts/relevantproducts.component';
import { MattressComponent } from './containers/ourmattress/mattress/mattress.component';
import { BedframeComponent } from './containers/ourbedframe/bedframe/bedframe.component';
import { LoggedComponent } from './containers/log/logged/logged.component';






@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    RelevantproductsComponent,
    MattressComponent,
    BedframeComponent,
    LoggedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
