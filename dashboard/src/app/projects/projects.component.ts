import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

    constructor() { }

    clients = ['Ikea', 'Sigma',
        'Ford', 'Newton'];

    employees = ['Kalle Anka', 'Timon Andersson',
        'Pumba Linée', 'Simba Kungen'];

    ngOnInit() {
    }

    addProject(): void {

    }

}
