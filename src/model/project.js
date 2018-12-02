export class Project {
  cliente;
  integrador;
  prestadores;
  general;
  functionalRequirements;
  notFunctionalRequirements;
  sprints;

  constructor(general, functionalRequirements, notFunctionalRequirements, sprints, cliente, integrador, prestadores) {
    if (cliente === undefined)
      this.cliente = { name: '', email: '', office: '' };
    else
      this.cliente = cliente;

    if (integrador === undefined) 
      this.integrador = { name: '', email: '', office: '' };
    else
      this.integrador = integrador;

    if (prestadores === undefined) 
      this.prestadores = [];
    else
      this.prestadores = prestadores;

    if (general === undefined)
      this.general = { name: '', theme: '', details: '' };
    else
      this.general = general;

    if (functionalRequirements === undefined)
      this.functionalRequirements = [];
    else
      this.functionalRequirements = functionalRequirements;

    if (notFunctionalRequirements === undefined)
      this.notFunctionalRequirements = [];
    else
      this.notFunctionalRequirements = notFunctionalRequirements;

    if (sprints === undefined)
      this.sprints = [];
    else
      this.sprints = sprints;
  }
}

export default Project;