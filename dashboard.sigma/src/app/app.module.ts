import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';

import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { MatButtonToggleModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    EmployeeComponent,
    ProjectComponent
  ],
  imports: [
     BrowserModule,
    FormsModule,
    HttpModule,
    AdminModule,
    AppRoutingModule,
    MatButtonToggleModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
