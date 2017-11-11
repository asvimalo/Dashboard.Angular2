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
    //Get employees TODO (service)

    constructor(private repo:RepoEmployee) { }

    getEmployees():void {
      this.repo.getEmployees()
        .subscribe(employees => this.employees = employees)
    }

    ngOnInit() {
      this.getEmployees();
    }

    onSelect(employee: Employee):void{
      this.selectedEmployee = employee;
    }
    addEmployee(): void {

    }

}
