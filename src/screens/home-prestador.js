import React, { Component } from 'react';
import { Item, Label, Segment, Grid, Card, Image, Icon, Divider, Header, Container } from 'semantic-ui-react';
import Service from '../global/service';
import Prestador from '../global/prestador'
import ManBusiness from '../images/man-engomadinho-jovem.svg'

class HomePrestador extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  // MOCK
  prestador = new Prestador(
    'Username',
    'username@email.com',
    'Prestador');

  // MOCK
  services = [
    new Service(
      'Service Name 1',
      'Service Description Service Description Service Description Service Description',
      'Pendente 1',
      'Android 1'
    ),
    new Service(
      'Service Name 2',
      'Service Description Service Description Service Description Service Description',
      'Pendente 2',
      'Android 2'
    ),
    new Service(
      'Service Name 3',
      'Service Description Service Description Service Description Service Description',
      'Pendente 3',
      'Android 3'
    ),
  ];

  mapper(services) {
    return (
      services.map((service) =>
        <Item.Content key={service.name}>
          <Item.Header as='h3'>{service.name}</Item.Header>
          <Item.Description><p>{service.description}</p></Item.Description>
          <Item.Extra style={{ marginTop: 10 }}>
            <Label>{service.theme}</Label>
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
                <Card.Header>Olá, {this.prestador.name} !</Card.Header>
                <Card.Meta>
                  <span className='office'>{this.prestador.office}</span>
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='mail' />
                  {this.prestador.email}
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment>
              {this.mapper(this.services)}
            </Segment>
          </Grid.Column>
          <Grid.Column width={3}>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  }
}

export default HomePrestador;
