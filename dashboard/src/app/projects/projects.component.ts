import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Project} from '../entities/entities';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

  selectedProject: Project;
  //Get projects TODO (service)
  constructor() { }



  ngOnInit() {
  }

  onSelected(project: Project):void{
    this.selectedProject = project;
  }

    addProject(): void {

    }

}
