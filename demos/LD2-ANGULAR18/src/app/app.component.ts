import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './model/Employee';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'LD2-ANGULAR18';
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
