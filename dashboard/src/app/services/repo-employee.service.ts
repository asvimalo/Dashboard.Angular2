import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Employee, AcquiredKnowledge, Assignment } from '../entities/entities';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { EmployeePost } from '../models/models';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RepoEmployee {

  private employeesUrl = 'http:localhost:8890/api/dashboard/employees';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ){ }
  ///////////////////////////////////////////////////
  // get all employees
  getEmployees(): Observable<Employee[]> {
    this.messageService.add('Employee repository: fetched employees');
    return this.http.get<Employee[]>(this.employeesUrl)
    .pipe(
      tap(employees => this.log('Fetched employees')),
      catchError(this.handleError('getEmployees',[]))
    );

  }
  ///////////////////////////////////////////////////
  // GET employee by ID. Will 404 if id not found */
  getEmployee(id:number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(
      tap(_ => this.log('fetch employee id =${id}')),
      catchError(this.handleError<Employee>('getEmployee id=${id}'))
    )
  }

  /////////////////////////////////////////////////
  // Get employee BY ID. Return undifined when id not found
  getEmployeeNo404<Data>(id: number): Observable<Employee> {
   const url = `${this.employeesUrl}/?id=${id}`;
   return this.http.get<Employee[]>(url)
     .pipe(
       map(employees => employees[0]), // returns a {0|1} element array
       tap(h => {
         const outcome = h ? `fetched` : `did not find`;
         this.log(`${outcome} hero id=${id}`);
       }),
       catchError(this.handleError<Employee>(`getEmployee id=${id}`))
     );
   }

   ////////////////////////////////////////////////////////
   // SEARCH employees

   searchEmployee(term: string): Observable<Employee[]> {

     if(!term.trim()){
      // if not search term, return empty hero array.
       return of([]);
     }
    const url = `${this.employeesUrl}/?firstName=${term}`;
    return this.http.get<Employee[]>(url).pipe(
      tap(_ => this.log(`found employees matching "${term}"`)),
      catchError(this.handleError<Employee[]>('searchEmployees', []))
    )
   }
   //////// Save methods //////////

  /** POST: add a new employee to the server */
  addEmployee (employeePost: EmployeePost): Observable<EmployeePost> {
    return this.http.post<EmployeePost>(this.employeesUrl,
      employeePost,
      httpOptions).pipe(
      tap((employeePost: EmployeePost) => this.log(`added employee w/ firstName=${employeePost.firstName}`)),
      catchError(this.handleError<EmployeePost>('addEmployee'))
    );
  }

  /** DELETE: delete the employee from the server */
  deleteEmployee (employee: Employee | number): Observable<Employee> {
    const id = typeof employee === 'number' ? employee : employee.employeeId;
    const url = `${this.employeesUrl}/${id}`;

    return this.http.delete<Employee>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Employee>('deleteHero'))
    );
  }

  /** PUT: update the employee on the server */
  updateEmployee (employee: Employee): Observable<any> {
    return this.http.put(this.employeesUrl, employee, httpOptions).pipe(
      tap(_ => this.log(`updated employee id=${employee.employeeId}`)),
      catchError(this.handleError<any>('updateEmployee'))
    );
  }



  ////////////////////////// Error handling ////////////////////////////

  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
//
// export const employees: Employee[] = [
// { employeeId: 11, firstName: 'Mr. Nice',lastName: 'Paco', personNr: '' , acquiredKnowledges: new Array<AcquiredKnowledge>(),assignments:  new Array<Assignment>()},
// { employeeId: 12, firstName: 'Narco' ,lastName: 'Paco', personNr: '' , acquiredKnowledges: new Array<AcquiredKnowledge>(),assignments:  new Array<Assignment>()},
// { employeeId: 13, firstName: 'Bombasto' ,lastName: 'Paco', personNr: '' , acquiredKnowledges: new Array<AcquiredKnowledge>(),assignments:  new Array<Assignment>()},
// { employeeId: 14, firstName: 'Celeritas' ,lastName: 'Paco', personNr: '' , acquiredKnowledges: new Array<AcquiredKnowledge>(),assignments:  new Array<Assignment>()},
// { employeeId: 15, firstName: 'Magneta' ,lastName: 'Paco', personNr: '' , acquiredKnowledges: new Array<AcquiredKnowledge>(),assignments:  new Array<Assignment>()},
// { employeeId: 16, firstName: 'RubberMan' ,lastName: 'Paco', personNr: '' , acquiredKnowledges: new Array<AcquiredKnowledge>(),assignments:  new Array<Assignment>()},
// { employeeId: 17, firstName: 'Dynama' ,lastName: 'Paco', personNr: '' , acquiredKnowledges: new Array<AcquiredKnowledge>(),assignments:  new Array<Assignment>()},
// { employeeId: 18, firstName: 'Dr IQ' ,lastName: 'Paco', personNr: '' , acquiredKnowledges: new Array<AcquiredKnowledge>(),assignments:  new Array<Assignment>()},
// { employeeId: 19, firstName: 'Magma' ,lastName: 'Paco', personNr: '' , acquiredKnowledges: new Array<AcquiredKnowledge>(),assignments:  new Array<Assignment>()},
// { employeeId: 20, firstName: 'Tornado' ,lastName: 'Paco', personNr: '' , acquiredKnowledges: new Array<AcquiredKnowledge>(),assignments:  new Array<Assignment>()}
// ];
