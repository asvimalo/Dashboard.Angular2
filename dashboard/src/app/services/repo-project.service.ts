import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project, Phase, Assignment } from '../entities/entities';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

@Injectable()

export class RepoProject {

  constructor(){ }

  getProjects(): Observable<Project[]>{
    //let projects = new Array<Project>();
    return of (projects);
  }
  getProject(id:number): Observable<Project> {
    return of(projects.find(project => project.projectId === id))
  }
}
export const projects: Project[] = [
{ projectId: 11, projectName: 'Mr. Nice', phases: new Array<Phase>(), startDate: new Date(), stopDate: new Date(), assignments: new Array<Assignment>(),clientId: 1,client: null, timeBudget: 40, notes: ''},
{ projectId: 12, projectName: 'Mr. Nice', phases: new Array<Phase>(), startDate: new Date(), stopDate: new Date(), assignments: new Array<Assignment>(),clientId: 1,client: null, timeBudget: 40, notes: ''},
{ projectId: 13, projectName: 'Mr. Nice', phases: new Array<Phase>(), startDate: new Date(), stopDate: new Date(), assignments: new Array<Assignment>(),clientId: 1,client: null, timeBudget: 40, notes: ''},
{ projectId: 14, projectName: 'Mr. Nice', phases: new Array<Phase>(), startDate: new Date(), stopDate: new Date(), assignments: new Array<Assignment>(),clientId: 1,client: null, timeBudget: 40, notes: ''},
{ projectId: 15, projectName: 'Mr. Nice', phases: new Array<Phase>(), startDate: new Date(), stopDate: new Date(), assignments: new Array<Assignment>(),clientId: 1,client: null, timeBudget: 40, notes: ''},
{ projectId: 16, projectName: 'Mr. Nice', phases: new Array<Phase>(), startDate: new Date(), stopDate: new Date(), assignments: new Array<Assignment>(),clientId: 1,client: null, timeBudget: 40, notes: ''},
{ projectId: 17, projectName: 'Mr. Nice', phases: new Array<Phase>(), startDate: new Date(), stopDate: new Date(), assignments: new Array<Assignment>(),clientId: 1,client: null, timeBudget: 40, notes: ''},
{ projectId: 18, projectName: 'Mr. Nice', phases: new Array<Phase>(), startDate: new Date(), stopDate: new Date(), assignments: new Array<Assignment>(),clientId: 1,client: null, timeBudget: 40, notes: ''},
{ projectId: 19, projectName: 'Mr. Nice', phases: new Array<Phase>(), startDate: new Date(), stopDate: new Date(), assignments: new Array<Assignment>(),clientId: 1,client: null, timeBudget: 40, notes: ''},
{ projectId: 20, projectName: 'Mr. Nice', phases: new Array<Phase>(), startDate: new Date(), stopDate: new Date(), assignments: new Array<Assignment>(),clientId: 1,client: null, timeBudget: 40, notes: ''}
];
