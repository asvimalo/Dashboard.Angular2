import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component'
import { ProjectDetailComponent } from './project-detail/project-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employee-detail/:id', component: EmployeeDetailComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project-detail/:id', component: ProjectDetailComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
