export class Project {
  general;
  functionalRequirements;
  notFunctionalRequirements;
  sprints;

  constructor(general, functionalRequirements, notFunctionalRequirements, sprints ) {
    if(general===undefined) 
      this.general = { name: '', theme: '', details: ''};
    else
      this.general = general;
    
    if(functionalRequirements===undefined)
      this.functionalRequirements = [];
    else
      this.functionalRequirements = functionalRequirements;

    if(notFunctionalRequirements===undefined)
      this.notFunctionalRequirements = [];
    else
      this.notFunctionalRequirements = notFunctionalRequirements;

    if(sprints===undefined)
      this.sprints = [];
    else
      this.sprints = sprints;
  }
}

export default Project;