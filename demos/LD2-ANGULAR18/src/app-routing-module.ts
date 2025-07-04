import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
// import { LoginComponent } from './login/login.component';
import { AddEmpComponent } from './app/add-emp/add-emp.component';
import { ListEmpComponent } from './app/list-emp/list-emp.component';
import { LoginComponent } from './app/login/login.component';

// Please extract the routes and place it in the app.routes.ts file.
const routes:Routes= [
   // Application routes can be defined here.
//    { path:'login', component:LoginComponent},
      {path:'employees', component:ListEmpComponent},
//    {path:'add', component:AddEmpComponent},
   {path:'**', component:LoginComponent} // Wildcard route for a 404 page
]
@NgModule({
    // The declarations array is used to declare the components, directives, and pipes that belong to this module.
    declarations: [],
    // The imports array is used to import other modules that this module depends on.
    imports: [ RouterModule.forRoot(routes)],
    // The exports array is used to export the RouterModule so that it can be used in other modules.
    exports: [RouterModule]
})

// The AppRoutingModule is a custom module that is used to configure the routing for the application.
export class AppRoutingModule {
    // This module is used to configure the routing for the application.
    // It can be used to define routes and other routing-related configurations.
    // The AppRoutingModule is typically imported into the root module of the application (AppModule).

}