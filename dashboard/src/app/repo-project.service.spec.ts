import { TestBed, inject } from '@angular/core/testing';

import { RepoProject } from './repo-project.service';

describe('RepoProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoProject]
    });
  });

  it('should be created', inject([RepoProject], (service: RepoProject) => {
    expect(service).toBeTruthy();
  }));
});
