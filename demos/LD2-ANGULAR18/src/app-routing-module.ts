import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
// import { LoginComponent } from './login/login.component';
import { AddEmpComponent } from './app/add-emp/add-emp.component';
const routes:Routes= [
   // Application routes can be defined here.
//    { path:'login', component:LoginComponent},
   {path:'add', component:AddEmpComponent},
//    {path:'**', component:LoginComponent} // Wildcard route for a 404 page
]
@NgModule({
    // The declarations array is used to declare the components, directives, and pipes that belong to this module.
    declarations: [],
    imports: [],
    providers: [],
    bootstrap: []
})

export class AppRoutingModule {
    // This module is used to configure the routing for the application.
    // It can be used to define routes and other routing-related configurations.
    // The AppRoutingModule is typically imported into the root module of the application (AppModule).

}