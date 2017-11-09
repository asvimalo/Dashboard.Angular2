import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeesComponent implements OnInit {

    constructor() { }

    knowdleges = ['HTML5', 'CSS3',
        'AngularJS', 'Xamarin'];

    ngOnInit() {
    }

    addEmployee(): void {

    }

}
