import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LugaresComponent} from '../app/components/lugares/lugares.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

const routes: Routes = [
  {path:"",component:HomeComponent},
 // {path:"**",component:HomeComponent},
  {path: 'places',component: LugaresComponent},
  {path:'login',  component: LoginComponent},
  {path:'registro',component: RegistroComponent},
  {path:'dashboard', component:DashboardComponent},
  {
    path:'dashboard',component:DashboardComponent
  },
  {path:"home",component:HomeComponent}


];
export const ROUTING: ModuleWithProviders=RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
