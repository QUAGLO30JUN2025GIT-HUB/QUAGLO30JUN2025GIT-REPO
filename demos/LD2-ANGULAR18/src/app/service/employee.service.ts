import { Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee } from "../model/Employee";
// The @Injectable decorator is used to mark the class as a service that can be injected into other components or services.
@Injectable({
    // Sigleton Bean in Spring
    providedIn: 'root'
})
// This is a custom service for managing employee data.
// Whereas, the HttpClient is a built-in Angular service for making HTTP requests.
export class EmployeeService {
    // TypeScript is a superset of JavaScript, so we can use TypeScript features like types and interfaces.
    // The baseURL is of type string and points to the backend API endpoint. 
    // Typescript ensures that the baseUrl is always a string and cannot be changed to a different type.
    baseUrl: string = "http://localhost:3000/employees";
    // The constructor keyword in TypeScript is used to define a constructor for the class.
    // It is a special method that is called when an instance of the class is created.

    // The httpClient property is of type HttpClient, which is an Angular service for making HTTP requests.
    // httpclient: HttpClient;
    // The consturctor is defined to inject the HttpClient service into the EmployeeService class.

    // constructor(httpClient: HttpClient) {
    //     this.httpclient = httpClient;
    // // Initialize the call to the backend API endpoint.
    // }


    // This is a short-hand way to define a constructor in TypeScript.
    // The constructor is used to inject the HttpClient service into the EmployeeService class.
    // The private keyword makes the httpClient property accessible only within the EmployeeService class.
    // The httpCient property is automatically initialized with the injected HttpClient instance.
    constructor(private httpClient: HttpClient) {
    }
    getEmployees() {
        console.log("Fetching employees from: " + this.baseUrl);
        // write the logic to fetch employees from the backend API endpoint.

        return this.httpClient.get<Employee[]>(this.baseUrl);
    }

    createEmployee(employee: Employee) {
        return this.httpClient.post(this.baseUrl, employee);
    }
}