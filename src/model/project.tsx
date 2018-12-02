import { Cliente } from './cliente';
import { Integrador } from './integrador';
import { Prestador } from './prestador';
import { Requirement } from './requirement';
import { Sprint } from './sprint';

export class Project {
  cliente: Cliente;
  integrador: Integrador;
  prestadores: Prestador[];
  general: { name: string, theme: string, details: string };
  functionalRequirements: Requirement[];
  notFunctionalRequirements: Requirement[];
  sprints: Sprint[];

  constructor(
    general: { name: string, theme: string, details: string },
    cliente: Cliente,
    integrador: Integrador,
    prestadores: Prestador[],
    functionalRequirements: Requirement[],
    notFunctionalRequirements: Requirement[],
    sprints: Sprint[],
  ) {
    this.general = general ? general : {name: '',theme: '', details: ''};
    this.cliente = cliente ? cliente : {name: '', email: '', office: ''};
    this.integrador = integrador ? integrador : {name: '', email: '', office: ''};
    this.prestadores = prestadores ? prestadores : [];
    this.functionalRequirements = functionalRequirements ? functionalRequirements : [];
    this.notFunctionalRequirements = notFunctionalRequirements ? notFunctionalRequirements : [];
    this.sprints = sprints ? sprints : [];
  }
}
