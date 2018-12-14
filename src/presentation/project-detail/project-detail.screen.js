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

  async componentWillMount() {
    var cliente;
    var project;
    await getProject('Projeto 1').then(response => {
      project=response;
      console.log(project);
    });
    await getCliente(project.cliente).then(response => {
      cliente=response;
      console.log(cliente);
    });
    this.setState({cliente, project});
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
