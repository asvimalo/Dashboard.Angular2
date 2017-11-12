import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RepoEmployee } from '../services/repo-employee.service';
import { Employee } from '../entities/entities';
import { EmployeePost } from '../models/models';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeesComponent implements OnInit {

    selectedEmployee: Employee;
    employees: Employee[] = new Array<Employee>();


    constructor(
      private repo:RepoEmployee,
      private messageService: MessageService
    ) { }

    ngOnInit() {
      this.getEmployees();
    }
    getEmployees():void {
      this.repo.getEmployees()
        .subscribe(employees => this.employees = employees)
    }
    add(employeePost: EmployeePost): void {
      //employee = name.trim();
      if (!employeePost) { return; }
      this.repo.addEmployee(employeePost)
        .subscribe(employee => {
          
          let employeeX = new Employee();
          employeeX.firstName = employee.firstName;
          employeeX.lastName = employee.lastName;
          employeeX.personNr = employee.personNr;

          this.employees.push(employeeX);
    });
}



}
