import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Employee } from '../entities/entities';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeesComponent implements OnInit {

    selectedEmployee: Employee;
    //Get employees TODO (service)
    constructor() { }

    knowdleges = ['HTML5', 'CSS3',
        'AngularJS', 'Xamarin'];

    ngOnInit() {
    }
    onSelected(employee: Employee):void{
      this.selectedEmployee = employee;
    }
    addEmployee(): void {

    }

}
