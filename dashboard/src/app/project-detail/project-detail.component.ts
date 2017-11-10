import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Project } from '../entities/entities';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectDetailComponent implements OnInit {

  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

}
