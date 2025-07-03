import { NgModule } from '@angular/core';
// S3: Standalone to Modular
// import { AppComponent } from './app.component.ts.exclude';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeService } from './service/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing-module';
import { AppComponent } from './app.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
// S4: Standalone to Modular
@NgModule({
    // The declarations array is used to declare the components, directives, and pipes that belong to this module.
    declarations: [AppComponent,ListEmpComponent,
        AddEmpComponent,LoginComponent],
    // The imports array is used to import other modules that this module depends on.
    imports: [CommonModule,ReactiveFormsModule,BrowserModule, HttpClientModule, AppRoutingModule],

    // The providers array is used to specify the services that this module provides.
    // S6: Standalone to Modular
    providers: [EmployeeService],
    // The bootstrap array is used to specify the root component that Angular should bootstrap when the application starts.
    // bootstrap: [ListEmpComponent]
    bootstrap : [AppComponent]

    // bootstrap: [AppComponent]
})

export class AppModule{

}