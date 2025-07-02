import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
@Component({
  selector: 'app-add-emp',
  standalone: true,
  imports: [],
  templateUrl: './add-emp.component.html',
  styleUrl: './add-emp.component.css'
})
export class AddEmpComponent {
  // Declare the form group
  // The FormGroup is a class that tracks the value and validity state of a group of FormControl instances.
  addForm : FormGroup;
  constructor(private formBuilder: FormBuilder, private employeeService:EmployeeService){
    this.addForm = this.formBuilder.group({
    id : [1000],
    name : ["John Doe"],
    salary : [50000]
    });
  }

  saveEmployee() {
    console.log("Posting employee data: ", this.addForm.value);
    this.employeeService.createEmployee(this.addForm.value)
    .subscribe( data => {
      console.log("Employee created successfully: ", data);});
  }
}
