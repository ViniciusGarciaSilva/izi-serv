import React, { Component } from 'react';
import ProjectDetail from './project-detail.component';
import { getProject } from './../../data/project.datasource';
import { Project } from './../../model/project';
import { Cliente } from './../../model/cliente';
import { getCliente } from './../../data/cliente.datasource';

class ProjectDetailScreen extends Component {
  constructor() {
    super();
    this.state = {
      project: new Project(),
      cliente: new Cliente(),
    }
  }

  componentWillMount() {
    const project = getProject('Project 1');
    const cliente = getCliente(project.cliente);
    this.setState({project, cliente});
  }

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
