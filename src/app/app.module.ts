import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeClearFormComponent } from './bike-clear-form/bike-clear-form.component';
import { BikeClearListComponent } from './bike-clear-list/bike-clear-list.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { MapsComponent } from './maps/maps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { BikeUserComponent } from './bike-user/bike-user.component';
import { RegisterComponent } from './register/register.component';
import {HomeComponent} from "./home/home.component";




@NgModule({
  declarations: [
    AppComponent,
    BikeClearFormComponent,
    BikeClearListComponent,
    HomeComponent,
    LoginComponent,
    MapsComponent,
    BikeUserComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
