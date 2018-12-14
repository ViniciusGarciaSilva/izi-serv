import { Project } from '../model/project';
import { Sprint } from './../model/sprint';
import axios from 'axios';

export function getProjectList() {
  return axios('http://127.0.0.1:5000/projetos', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => { 
      const projectList = response.data.map( project => {
        return new Project(
          project.nome,
          project.detalhes,
          project.tema,
          project.cliente,
          project.integrador,
          project.prestadores,
          project.requisitosFuncionais,
          project.requisitosNaoFuncionais,
          project.sprints,
          project.status,
        ) 
      });
      console.log(projectList);
      return projectList;  
    })
    .catch((error) => { throw (error.response.data.errors[0].message) })
}

export function createProject(project) {
  return axios('http://127.0.0.1:5000/projeto', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: ({
      'nome': project.name,
      'detalhes': project.details,
    }),
  })
    .then((response) => { console.log(response); return (response.data) })
    .catch((error) => { throw (error.response.data.errors[0].message) })
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