import { TestBed, inject } from '@angular/core/testing';

import { RepoEmployeeService } from './repo-employee.service';

describe('RepoEmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoEmployeeService]
    });
  });

  it('should be created', inject([RepoEmployeeService], (service: RepoEmployeeService) => {
    expect(service).toBeTruthy();
  }));
});
