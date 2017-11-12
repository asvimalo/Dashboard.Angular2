import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectsComponent } from './projects/projects.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RepoEmployee } from './services/repo-employee.service';
import { RepoProject } from './services/repo-project.service';
import { AppRoutingModule } from './/app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    EmployeesComponent,
    ProjectsComponent,
    EmployeeDetailComponent,
    EmployeeAddComponent,
    ProjectAddComponent,
    ProjectDetailComponent,
    DashboardComponent,
    MessagesComponent,
    EmployeeSearchComponent
  ],
  providers: [RepoEmployee,RepoProject, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
