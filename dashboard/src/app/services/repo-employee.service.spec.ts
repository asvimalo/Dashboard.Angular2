import { TestBed, inject } from '@angular/core/testing';

import { RepoEmployee } from './repo-employee.service';

describe('RepoEmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoEmployee]
    });
  });

  it('should be created', inject([RepoEmployee], (service: RepoEmployee) => {
    expect(service).toBeTruthy();
  }));
});
