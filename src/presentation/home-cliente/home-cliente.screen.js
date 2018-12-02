import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Item, Label, Segment, Grid, Card, Image, Icon, Divider, Header, Container } from 'semantic-ui-react';
import ManBusiness from '../../images/man-business.svg'
import Cliente from './../../model/cliente';
import { Project } from './../../model/project';

class HomeCliente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cliente: new Cliente(),
      projects: new Project(),
    }
  }

  componentWillMount() {
    this.setState({ cliente: this.clienteMock, projects: this.projectsMock });
  }

  mapperProjects(projects) {
    return (
      projects.map((project) =>
        <Container>
          <Item.Content style={{ marginTop: 20, marginBottom: 20 }} key={project.general.name}>
            <Item.Header as='h3'><NavLink to='/projeto'>{project.general.name} </NavLink></Item.Header>
            <Item.Description><p>{project.general.description}</p></Item.Description>
            <Item.Extra style={{ marginTop: 10 }}>
              <Label>{project.general.theme}</Label>
            </Item.Extra>
          </Item.Content>
          <Divider />
        </Container>
      )
    );
  }

  render() {
    return (
      <Grid style={{ marginTop: 50 }} columns={2} centered >
        <Grid.Row >
          <Grid.Column align='right' width={4} >
            <Card align='left'>
              <Image centered src={ManBusiness} fluid />
              <Card.Content>
                <Card.Header>Olá, {this.state.cliente.name} !</Card.Header>
                <Card.Meta>
                  <span className='office'>{this.state.cliente.office}</span>
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='mail' />
                  {this.state.cliente.email}
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment>
              {this.mapperProjects(this.state.projects)}
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  }

  // MOCK
  clienteMock = new Cliente(
    'Username',
    'username@email.com',
    'Cliente');

  // MOCK
  projectsMock = [
    new Project(
      {
        name: 'Project Name 1',
        description: 'Project Description Project Description Project Description Project Description',
        theme: 'Android 1'
      },
    ),
    new Project(
      {
        name: 'Project Name 2',
        description: 'Project Description Project Description Project Description Project Description',
        theme: 'Android 2'
      },
    ),
    new Project(
      {
        name: 'Project Name 3',
        description: 'Project Description Project Description Project Description Project Description',
        theme: 'Android 3'
      },
    ),
  ];

}

export default HomeCliente;
