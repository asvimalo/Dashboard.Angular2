import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './entities/entities';

@Injectable()
export class RepoEmployee {

  constructor(){ }

  getEmployees(): Employee[]{
    let employees = new Array<Employee>();
    return employees;
  }
}
