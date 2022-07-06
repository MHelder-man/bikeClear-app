import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {BikeUserComponent} from "./bike-user/bike-user.component";
import {GraphComponent} from "./graph/graph.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'bike-user', component: BikeUserComponent},
  {path: 'graph', component: GraphComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'},

  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(routes);


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
