import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from './entities/entities';

@Injectable()

export class RepoProject {

  constructor(){ }

  getProjects(): Project[]{
    let projects = new Array<Project>();
    return projects;
  }
}
