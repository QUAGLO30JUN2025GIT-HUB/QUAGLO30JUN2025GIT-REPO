import { Component,OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-list-emp',
  standalone: false,
  // imports: [],
  templateUrl: './list-emp.component.html',
  styleUrl: './list-emp.component.css'
})
export class ListEmpComponent {

  employeeList? : Employee[];
  constructor(private employeeService: EmployeeService) {
  }
  ngOnInit(): void {
      this.employeeService.getEmployees().subscribe((dataFromExternalService) => {
          this.employeeList = dataFromExternalService;
          console.log("Employees fetched successfully: ", this.employeeList);
      });
  }
}

