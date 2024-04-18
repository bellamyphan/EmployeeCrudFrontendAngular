import { Router, Routes } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { Employee } from './../model/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.employee)
    this.saveEmployee();
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe({
      next: (data) => {
        // Success: Provide feedback to the user
        console.log('Employee created successfully:', data);
        // You can display a success message to the user here
        this.goToEmployeeList(); // Navigate only after successful creation
      },
      error: (error) => {
        // Error: Provide meaningful error message to the user
        console.error('Error occurred while creating employee:', error);
        // You can display an error message to the user here
      }
    });
  }

  goToEmployeeList() {
    this.router.navigate(['employees']);
  }
}
