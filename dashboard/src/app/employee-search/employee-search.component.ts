import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of'
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { Employee } from '../entities/entities';
import { RepoEmployee } from '../services/repo-employee.service';
@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeSearchComponent implements OnInit {
  //  the declaration of heroes$ as an Observable
  employees$: Observable<Employee[]>;
  // The searchTerms property is declared as an RxJS Subject.
  // A Subject is both a source of observable values and an Observable itself.
  //  You can subscribe to a Subject as you would any Observable.
  private searchTerms = new Subject<string>();

  constructor(private repoEmployee: RepoEmployee) { }

   // Push a search term into the observable stream.
   // You can also push values into that Observable
   // by calling its next(value) method as the search() method does.

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.employees$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),
        // ignore new term if same as previous term
        distinctUntilChanged(),
        // switch to new search observable each time the term changes
        switchMap((term: string) => this.repoEmployee.searchEmployee(term))
    )
  }

}
