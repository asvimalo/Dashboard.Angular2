import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Project,Employee } from '../entities/entities';

import { RepoEmployee } from '../services/repo-employee.service';
import { RepoProject } from '../services/repo-project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  employees: Employee[] = [];
  projects: Project[] = [];
  constructor(
    private repoEmployee: RepoEmployee,
    private repoProject: RepoProject) { }

  ngOnInit() {
    this.getEmployees();
    this.getProjects();
  }

  getEmployees(){
    this.repoEmployee.getEmployees()
      .subscribe(employees => this.employees = employees.slice(1,5));
  }
  getProjects(){
    this.repoProject.getProjects()
      .subscribe(projects => this.projects = projects.slice(1,5));
  }
}
