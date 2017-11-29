import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
