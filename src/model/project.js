export class Project {
  cliente;
  integrador;
  prestadores;
  name;
  theme;
  details;
  functionalRequirements;
  notFunctionalRequirements;
  sprints;
  status;

  constructor(name, details, theme, cliente, integrador, prestadores, functionalRequirements, notFunctionalRequirements, sprints, status ) {
    this.name = name ? name : '';
    this.theme = theme ? theme : '';
    this.details = details ? details : '';
    this.cliente = cliente ? cliente : '';
    this.integrador = integrador ? integrador : '';
    this.prestadores = prestadores ? prestadores : [];
    this.functionalRequirements = functionalRequirements ? functionalRequirements : [];
    this.notFunctionalRequirements = notFunctionalRequirements ? notFunctionalRequirements : [];
    this.sprints = sprints ? sprints : [];   
    this.status = status ? status : '';
  }
}
