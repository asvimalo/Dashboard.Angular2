import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Project } from '../entities/entities';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RepoProject } from '../services/repo-project.service';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectDetailComponent implements OnInit {

  @Input() project: Project;

  constructor(
    private route: ActivatedRoute,
    private repoProject: RepoProject,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProject();
  }
  getProject():void {
    const id = +this.route.snapshot.paramMap.get('id'); // + means convert string to a number
    this.repoProject.getProject(id)
      .subscribe(project => this.project = project);
  }
  goBack(): void {
  this.location.back();
}

}
