import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
