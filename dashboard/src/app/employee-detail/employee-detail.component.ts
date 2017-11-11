import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Employee } from '../entities/entities';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RepoEmployee } from '../services/repo-employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeDetailComponent implements OnInit {

  @Input() employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private repoEmployee: RepoEmployee,
    private location: Location
  ) { }

  ngOnInit() {
    this.getEmployee();
  }
  getEmployee():void {
    const id = +this.route.snapshot.paramMap.get('id'); // + means convert string to a number
    this.repoEmployee.getEmployee(id)
      .subscribe(employee => this.employee = employee);
  }
  goBack(): void {
  this.location.back();
  }
}
