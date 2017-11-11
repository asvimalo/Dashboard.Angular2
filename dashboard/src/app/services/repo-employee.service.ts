import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee, AcquiredKnowledge, Assignment } from '../entities/entities';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

@Injectable()
export class RepoEmployee {

  constructor(){ }

  getEmployees(): Observable<Employee[]>{

    return of(employees);
  }

}

export const employees: Employee[] = [
{ employeeId: 11, firstName: 'Mr. Nice',lastName: 'Paco', personNr: '' , acquiredKnowledges: new Array<AcquiredKnowledge>(),assignments:  new Array<Assignment>()},
{ employeeId: 12, firstName: 'Narco' ,lastName: 'Paco', personNr: '' , acquiredKnowledges: new Array<AcquiredKnowledge>(),assignments:  new Array<Assignment>()},
{ employeeId: 13, firstName: 'Bombasto' ,lastName: 'Paco', personNr: '' , acquiredKnowledges: new Array<AcquiredKnowledge>(),assignments:  new Array<Assignment>()},
{ employeeId: 14, firstName: 'Celeritas' ,lastName: 'Paco', personNr: '' , acquiredKnowledges: new Array<AcquiredKnowledge>(),assignments:  new Array<Assignment>()},
{ employeeId: 15, firstName: 'Magneta' ,lastName: 'Paco', personNr: '' , acquiredKnowledges: new Array<AcquiredKnowledge>(),assignments:  new Array<Assignment>()},
{ employeeId: 16, firstName: 'RubberMan' ,lastName: 'Paco', personNr: '' , acquiredKnowledges: new Array<AcquiredKnowledge>(),assignments:  new Array<Assignment>()},
{ employeeId: 17, firstName: 'Dynama' ,lastName: 'Paco', personNr: '' , acquiredKnowledges: new Array<AcquiredKnowledge>(),assignments:  new Array<Assignment>()},
{ employeeId: 18, firstName: 'Dr IQ' ,lastName: 'Paco', personNr: '' , acquiredKnowledges: new Array<AcquiredKnowledge>(),assignments:  new Array<Assignment>()},
{ employeeId: 19, firstName: 'Magma' ,lastName: 'Paco', personNr: '' , acquiredKnowledges: new Array<AcquiredKnowledge>(),assignments:  new Array<Assignment>()},
{ employeeId: 20, firstName: 'Tornado' ,lastName: 'Paco', personNr: '' , acquiredKnowledges: new Array<AcquiredKnowledge>(),assignments:  new Array<Assignment>()}
];
