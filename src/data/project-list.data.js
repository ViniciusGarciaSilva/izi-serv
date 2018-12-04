import { Project } from './../model/project';
import { Cliente } from './../model/cliente';

export function getProjectList() {
  const projectsMock = [
    new Project(
      'Project Name 1',
      'Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description',
      'Android 1',
      'Cliente 1',
    ),
    new Project(
      'Project Name 2',
      'Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description',
      'Android 2',
      'Cliente 2',
    ),
    new Project(
      'Project Name 3',
      'Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description',
      'Android 3',
      'Cliente 3',
    ),
    new Project(
      'Project Name 4',
      'Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description',
      'Android 4',
      'Cliente 4',
    ),
    new Project(
      'Project Name 5',
      'Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description',
      'Android 5',
      'Cliente 5',
    ),
    new Project(
      'Project Name 6',
      'Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description',
      'Android 6',
      'Cliente 6',
    ),
  ];

  return projectsMock;
}