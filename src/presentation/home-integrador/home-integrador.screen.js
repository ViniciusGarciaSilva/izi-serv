import React, { Component } from 'react';
import { Item, Label, Segment, Grid, Card, Image, Icon, Divider, Header, Container } from 'semantic-ui-react';
import ManBusiness from '../../images/man-business.svg'
import Integrador from './../../model/integrador';
import { Project } from './../../model/project';

class Homeintegrador extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  // MOCK
  integrador = new Integrador(
    'Username',
    'username@email.com',
    'Integrador');

  // MOCK
  projects = [
    new Project(
      'Project Name 1',
      'Project Description Project Description Project Description Project Description',
      'Pendente 1',
      'Android 1'
    ),
    new Project(
      'Project Name 2',
      'Project Description Project Description Project Description Project Description',
      'Pendente 2',
      'Android 2'
    ),
    new Project(
      'Project Name 3',
      'Project Description Project Description Project Description Project Description',
      'Pendente 3',
      'Android 3'
    ),
  ];

  mapper(projects) {
    return (
      projects.map((project) =>
        <Item.Content key={project.name}>
          <Item.Header as='h3'>{project.name}</Item.Header>
          <Item.Description><p>{project.description}</p></Item.Description>
          <Item.Extra style={{ marginTop: 10 }}>
            <Label>{project.theme}</Label>
          </Item.Extra>
          <Divider />
        </Item.Content>
      )
    );
  }

  render() {
    return (
      <Grid style={{ marginTop: 50 }} columns={2} centered >
        <Grid.Row >
          <Grid.Column align='right' width={3} >
            <Card align='left'>
              <Image centered src={ManBusiness} fluid />
              <Card.Content>
                <Card.Header>Olá, {this.integrador.name} !</Card.Header>
                <Card.Meta>
                  <span className='office'>{this.integrador.office}</span>
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='mail' />
                  {this.integrador.email}
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment>
              {this.mapper(this.projects)}
            </Segment>
          </Grid.Column>
          <Grid.Column width={3}>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  }
}

export default Homeintegrador;
