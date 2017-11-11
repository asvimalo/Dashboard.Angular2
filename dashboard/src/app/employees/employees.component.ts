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
    employees: Employee[] = new Array<Employee>();


    constructor(private repo:RepoEmployee) { }

    ngOnInit() {
      this.getEmployees();
    }
    getEmployees():void {
      this.repo.getEmployees()
        .subscribe(employees => this.employees = employees)
    }




}
