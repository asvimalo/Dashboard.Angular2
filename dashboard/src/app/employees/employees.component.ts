import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RepoEmployee } from '../services/repo-employee.service';
import { Employee } from '../entities/entities';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeesComponent implements OnInit {

    selectedEmployee: Employee;
    employees: Employee[];
    //Get employees TODO (service)

    constructor(private repo:RepoEmployee) { }

    getEmployees():void {
      this.employees = this.repo.getEmployees();
    }

    ngOnInit() {
      this.getEmployees();
    }

    onSelected(employee: Employee):void{
      this.selectedEmployee = employee;
    }
    addEmployee(): void {

    }

}
