import { Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
@Injectable({
    // Sigleton Bean in Spring
    providedIn: 'root'
})
class EmployeeService {
    // TypeScript is a superset of JavaScript, so we can use TypeScript features like types and interfaces.
    // The baseURL is of type string and points to the backend API endpoint. 
    // Typescript ensures that the baseUrl is always a string and cannot be changed to a different type.
    baseUrl : string = "http://localhost:3000/employees";
    // The constructor keyword in TypeScript is used to define a constructor for the class.
    // It is a special method that is called when an instance of the class is created.
    constructor() {
    // Initialize the call to the backend API endpoint.
    }
    getEmployees() {
        console.log("Fetching employees from: " + this.baseUrl);
        // write the logic to fetch employees from the backend API endpoint.
    }
}