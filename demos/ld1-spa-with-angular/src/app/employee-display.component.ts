import { Component } from "@angular/core"
@Component({
    standalone: true,
    selector: 'app-display-employee',
    template: `<h1>{{employeeName}}</h1>
     <h1>Employee id : {{employee.id}}</h1>
     <h2>Employee name : {{employee.name}}</h2>
     <h3>Employee salary : {{employee.salary}}</h3>
    `,
    styles: [ `h2 { color : red}`]
})
export class EmployeeDisplayComponent {
    employeeName = "Sam";
    employee = { id: 1, name: 'Alan', salary: 50000 }
}

// MyNameComponent and display your name.