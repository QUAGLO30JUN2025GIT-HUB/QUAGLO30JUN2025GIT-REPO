import { Component } from "@angular/core"
// The Component decorator is used to define a component in Angular.
// It provides metadata about the component, such as its selector, template, and styles.
// The component is defined as a standalone component, meaning it can be used independently without being part of a module.
// The standalone components were introduced in Angular 14, allowing for more modular and reusable components.
// The standalone became a default feature in Angular 16, making it easier to create and manage components without the need for NgModules.
// The standalone components allow for better tree-shaking and reduced bundle size, as they can be loaded on demand.
// The selector 'app-display-employee' is used to identify this component in the HTML.
// The template defines the HTML structure of the component, displaying the employee's name, id, and salary.
// The styles define the CSS styles for the component, changing the color of the h2 element to red.
// The component is named EmployeeDisplayComponent, and it is used to display employee information.
// The component is defined as a standalone component, meaning it can be used independently without being part of a module.
// 
@Component({
    standalone: true,
    selector: 'app-display-employee',
    // The `template` property defines the HTML structure of the component.
    // It uses Angular's interpolation syntax to bind the component's properties to the HTML.
    // The ` ticks (`) are used to define a multi-line string in JavaScript, allowing for easier formatting of the HTML.

    templateUrl: './employee-display.component.html',
    // template:  '<h1>Employee Name : {{employeeName}}</h1>' + 
    // '<h1>Employee id : {{employee.id}}</h1>'  +
    // '<h2>Employee name : {{employee.name}}</h2>' +
    // '<h3>Employee salary : {{employee.salary}}</h3>',
    styleUrls: ['./employee-display.component.css']
})

// The export statement makes the EmployeeDisplayComponent available for use in other parts of the application.
// By default in Angular, components are not exported, so we need to explicitly export it.
export class EmployeeDisplayComponent {
    // The `employeeName` property is a string that holds the name of the employee.
    employeeName = "Sam";
    // The `employee` property is an object that holds the employee's id, name, and salary.
    employee = { id: 100, name: 'Mary', salary: 50000 }
}
