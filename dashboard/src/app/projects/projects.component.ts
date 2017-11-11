import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Project} from '../entities/entities';
import { RepoProject } from '../services/repo-project.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

  selectedProject: Project;
  projects: Project[];


  constructor(private repo:RepoProject) { }

  getProjects():void {
    this.repo.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  ngOnInit() {
    this.getProjects();
  }

  onSelect(project: Project):void{
    this.selectedProject = project;
  }

    addProject(): void {

    }

}
