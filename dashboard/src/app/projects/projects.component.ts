import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Project} from '../entities/entities';
import { RepoProject } from '../repo-project.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

  selectedProject: Project;
  projects: Project[];

  //Get projects TODO (service)

  constructor(private repo:RepoProject) { }

  getProjects():void {
    this.projects = this.repo.getProjects();
  }

  ngOnInit() {
    this.getProjects();
  }

  onSelected(project: Project):void{
    this.selectedProject = project;
  }

    addProject(): void {

    }

}
