import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule,  MatProgressSpinnerModule
} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';


import { HomeComponent } from './components/home/home/home.component';
import { RelevantproductsComponent } from './containers/relevantproduct/relevantproducts/relevantproducts.component';
import { MattressComponent } from './containers/ourmattress/mattress/mattress.component';
import { BedframeComponent } from './containers/ourbedframe/bedframe/bedframe.component';
import { LoggedComponent } from './containers/log/logged/logged.component';
import { RegisterComponent } from './containers/toregister/register/register.component';
import { AddproductsComponent } from './containers/toadd/addproducts/addproducts.component';







@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    RelevantproductsComponent,
    MattressComponent,
    BedframeComponent,
    LoggedComponent,
    RegisterComponent,
    AddproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    LayoutModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
