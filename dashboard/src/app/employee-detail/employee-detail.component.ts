import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Employee } from '../entities/entities';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeDetailComponent implements OnInit {
  
  @Input() employee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
