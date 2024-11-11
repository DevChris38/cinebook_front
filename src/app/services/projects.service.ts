import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { TypeProjectEnum } from '../enum/type-project-enum';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  getProjects(): Project[] {
    return [
      {
        id: 1,
        name: 'zootopie',
        year: 2016,
        type: TypeProjectEnum.LG_METR_FIC,
        description: "Un super film d'animation",
        image:
          'https://fr.web.img3.acsta.net/pictures/15/12/11/14/34/280851.jpg',
      },
    ];
  }

  getProject(id: number): Project | null {
    let project: Project | null = null;

    this.getProjects().map((item: Project) =>
      item.id === id ? (project = item) : null,
    );
    return project;
  }
}
