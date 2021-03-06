import { Component, HostBinding, OnInit } from '@angular/core';

import { Project } from './project.model';
import { ProjectsService } from './projects.service';
import { itemStateTrigger, listStateTrigger, markedTrigger, slideStateTrigger } from './animations';
import { AnimationEvent } from '@angular/animations';
import { routeFadeStateTrigger } from '../shared/route-animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    markedTrigger,
    itemStateTrigger,
    listStateTrigger,
    routeFadeStateTrigger,
    slideStateTrigger
  ]
})
export class ProjectsComponent implements OnInit {
  @HostBinding('@routeFadeState') routeAnimation = true
  projects: Project[]
  markedPrjIndex = 0
  progress = 'progressing'
  createNew = false

  constructor(private prjService: ProjectsService) { }

  ngOnInit() {
    this.prjService.loadProjects()
      .subscribe(
        (prj: Project[]) => {
          this.progress = 'finished'
          this.projects = prj
        }
      )
  }

  onStatusUpdated(newStatus: string, id: number) {
    this.projects[id].status = newStatus
  }

  onProjectDeleted(index: number) {
    this.projects.splice(index, 1)
  }

  onProjectCreated(project: Project) {
    this.createNew = false
    setTimeout(() => {
      this.projects.unshift(project)
    }, 300)
  }
}
