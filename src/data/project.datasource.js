import { Project } from '../model/project';
import { Sprint } from './../model/sprint';

export function getProjectList() {
  return projectsMock;
}

export function createProject(project) {
  console.log(project);
}

export function getProject(name) {
  return projectMock;
}

const sprintMock = new Sprint(
  'theme',
  '00/00/00',
  '12/12/12',
  'Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description ',
);

const projectMock = new Project(
  'Project Name',
  'Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description',
  'Android',
  'Cliente',
  'Ingrador',
  'Prestador',
  [
    { name: 'Functional Requirement 1', priority: 'High' },
    { name: 'Functional Requirement 2', priority: 'Medium' },
    { name: 'Functional Requirement 3', priority: 'Low' },
  ],
  [
    { name: 'Not Functional Requirement 1', priority: 'High' },
    { name: 'Not Functional Requirement 2', priority: 'Medium' },
    { name: 'Not Functional Requirement 3', priority: 'Low' },
  ],
  [sprintMock, sprintMock, sprintMock, sprintMock],
  'Status'
);

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