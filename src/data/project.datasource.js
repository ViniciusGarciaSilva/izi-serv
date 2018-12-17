import { Project } from '../model/project';
import { Sprint } from './../model/sprint';
import axios from 'axios';

export function getProjectList() {
  return axios('https://iziserv.gq/projetos', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      const projectList = response.data.map(project => {
        var rand = themeMock[Math.floor(Math.random() * themeMock.length)];
        return new Project(
          project.nome,
          project.detalhes,
          rand,
          project.cliente,
          project.integrador,
          project.prestadores,
          project.funcReq,
          project.notFuncReq,
          project.sprints,
          project.status,
        );
      });
      console.log(projectList);
      return projectList;
    })
    .catch((error) => { throw (error.message) })
}

export function createProject(project) {
  return axios('https://iziserv.gq/projeto', {
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
    .catch((error) => { throw (error.message) })
}

export function getProject(name) {
  return axios('https://iziserv.gq/projeto/' + name, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      const project = response.data;
      console.log(project);
      var rand = themeMock[Math.floor(Math.random() * themeMock.length)];
      return new Project(
        project.nome,
        project.detalhes,
        rand,
        project.cliente,
        project.integrador,
        project.prestadores,
        project.requisitosFuncionais,
        project.requisitosNaoFuncionais,
        sprintsMock,
        project.status,
      );
    })
    .catch((error) => { throw (error.message) })
}

const themeMock = [
  'Android',
  'IOS',
  'Web',
  'Database',
  'I.A',
  'Automation',
  'Audio',
  'Video',
  'Eletronic',
]

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

const sprintsMock = [
  new Sprint(
    'Criação da interface básica',
    '14/12/2018',
    '21/12/2018',
    'Criação da interface básica da aplicação. Não é necessário que as funcionalidades estejam implementadas, mas sim que haja a identidade visual da aplicação'
  ),
  new Sprint(
    'Roteamento das telas',
    '21/12/2018',
    '28/12/2018',
    'Roteamento das telas de navegação da aplicação. Deve ser possível navegar por todas as telas incluídas no escopo'
  ),
  new Sprint(
    'Permanência dos dados',
    '28/12/2018',
    '05/01/2019',
    'Os dados embutidos na aplicação devem ser armazenados na nuvem e passíveis de serem consultado a qualquer momento.'
  ),
];
