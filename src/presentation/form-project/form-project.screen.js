import React, { Component } from 'react';
import { Container, Segment, Header, Button } from 'semantic-ui-react';
import GeneralInfoProject from './general-info-project.component';
import { Project } from './../../model/project';
import StepsIdea from './step-idea.component';
import ListRequirement from './../../components/list-requirement.component';
import ListSprint from './../../components/list-sprints.component';
import { createProject } from '../../data/project.datasource';
import { getClienteMock } from '../../data/cliente.datasource';

class FormProjectScreen extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1,
      steps: [
        { valid: false, number: 1 },
        { valid: false, number: 2 },
        { valid: false, number: 3 },
        { valid: false, number: 4 },
      ],
      project: new Project(),
      generalValid: false,
    }
  }

  render() {
    return (
      <Container style={{ marginTop: 100 }} >
        <StepsIdea
          steps={this.state.steps}
          onClick={this.onStepClick}
        />
        {this.createForm()}
        <Container textAlign='center' style={{ marginTop: 30, width: 150, marginBottom: 30 }}>
          <Button
            disabled={ this.validForm() ? false : true}
            fluid
            size='big'
            center
            color='blue'
            onClick={this.handleSubmitTap}
          > 
            Enviar
          </Button>
        </Container>
      </Container>
    )
  }

  createForm() {
    if (this.state.currentStep === 1) {
      return (
        <Container style={{ marginTop: 30 }}>
          <Header as='h2'>Informações Gerais</Header>
          <Segment >
            <GeneralInfoProject
              projectTheme={this.state.project.theme}
              projectName={this.state.project.name}
              projectDetails={this.state.project.details}
              validForms={this.validGeneralInfo}
            />
          </Segment>
        </Container>
      )
    }
    if (this.state.currentStep === 2) {
      return (
        <Container style={{ marginTop: 30 }}>
          <Header as='h2'>Requisitos Funcionais</Header>
          <Segment>
            <ListRequirement
              key={1}
              listRequirements={this.state.project.functionalRequirements}
              validForms={this.validFunctionalRequirements}
            />
          </Segment>
        </Container>
      )
    }
    if (this.state.currentStep === 3) {
      return (
        <Container style={{ marginTop: 30 }}>
          <Header as='h2'>Requisitos Não-Funcionais</Header>
          <Segment>
            <ListRequirement
              key={2}
              listRequirements={this.state.project.notFunctionalRequirements}
              validForms={this.validNotFunctionalRequirements}
            />
          </Segment>
        </Container>
      )
    }
    if (this.state.currentStep === 4) {
      return (
        <Container style={{ marginTop: 30 }}>
          <Header as='h2'>Sprints</Header>
          <Segment>
            <ListSprint
              sprintList={this.state.project.sprints}
              validForms={this.validSprints}
            />
          </Segment>
        </Container>
      )
    }
  }

  validForm() {
    return (
      this.state.steps[0].valid && 
      this.state.steps[1].valid && 
      this.state.steps[2].valid && 
      this.state.steps[3].valid
    )
  }

  validGeneralInfo = (name, theme, details, isValid) => {
    var project = this.state.project;
    project.name = name;
    project.theme = theme;
    project.details = details;
    var steps = this.state.steps;
    steps[0].valid = isValid;
    this.setState({ project: project, steps: steps });
  }

  validFunctionalRequirements = (listFunctionalRequirements, isValid) => {
    var project = this.state.project;
    project.functionalRequirements = listFunctionalRequirements;
    var steps = this.state.steps;
    steps[1].valid = isValid;
    this.setState({ project: project, steps: steps });
  }

  validNotFunctionalRequirements = (listNotFunctionalRequirements, isValid) => {
    var project = this.state.project;
    project.notFunctionalRequirements = listNotFunctionalRequirements;
    var steps = this.state.steps;
    steps[2].valid = isValid;
    this.setState({ project: project, steps: steps });
  }

  validSprints = (sprintList, isValid) => {
    var project = this.state.project;
    project.sprints = sprintList;
    var steps = this.state.steps;
    steps[3].valid = isValid;
    this.setState({ project: project, steps: steps });
  }

  onStepClick = (step) => {
    this.setState({ currentStep: step });
  }

  handleSubmitTap = () => {
    var project = this.state.project;
    project.cliente = getClienteMock().name;
    project.status = 'Aberto';
    this.setState({project});
    createProject(project);
  }
}
export default FormProjectScreen;
