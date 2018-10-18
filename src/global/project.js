export class Project {
  general;
  functionalRequirements;
  notFunctionalRequirements;
  sprints;

  constructor() {
    this.general = {
      name: '',
      theme: '',
      details: '',
    };
    this.functionalRequirements = [];
    this.notFunctionalRequirements = [];
    this.sprints = [];
  }
}

export default Project;