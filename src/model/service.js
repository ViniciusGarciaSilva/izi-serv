export class Service {
  name;
  theme;
  details;
  project;
  cliente;
  integrador;
  prestador;
  functionalRequirements;
  notFunctionalRequirements;
  sprints;
  status;

  constructor(name, details, theme, integrador, project, cliente, prestador, functionalRequirements, notFunctionalRequirements, sprints, status) {
    this.name = name ? name : '';
    this.theme = theme ? theme : '';
    this.details = details ? details : '';
    this.project = project ? project : '';
    this.cliente = cliente ? cliente : '';
    this.integrador = integrador ? integrador : '';
    this.prestadores = prestador ? prestador : '';
    this.functionalRequirements = functionalRequirements ? functionalRequirements : [];
    this.notFunctionalRequirements = notFunctionalRequirements ? notFunctionalRequirements : [];
    this.sprints = sprints ? sprints : [];   
    this.status = status ? status : '';
  }
}
