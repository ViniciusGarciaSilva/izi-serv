import React, { Component } from 'react';
import ProjectDetail from './project-detail.component';
import { getProject } from './../../data/project.datasource';
import { getCliente } from '../../data/cliente.datasource';
import { Project } from './../../model/project';
import { Cliente } from '../../model/cliente';
import { Integrador } from '../../model/integrador'

class ProjectDetailScreen extends Component {
  constructor() {
    super();
    this.state = {
      cliente: new Cliente(),
      project: new Project(),
    }
  }

  componentWillMount() {
    const project = getProject('Project 1');
    const cliente = getCliente(project.name);
    this.setState({project, cliente});
  }

  cliente = new Cliente(
    'Dunha',
    'dunha.batata@email.com',
    'Cliente'
  );

  integrador = new Integrador(
    'Joselma',
    'naruto@email.com',
    'Integrador'
  );

  render() {
    return (
      <ProjectDetail
        project={this.state.project}
        cliente={this.state.cliente}
      />
    );
  }
}

export default ProjectDetailScreen;
