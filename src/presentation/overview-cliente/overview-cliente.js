import React, { Component } from 'react';
import { Card, Header, Icon, Image, Segment, Grid, Checkbox } from 'semantic-ui-react';
import { Cliente } from '../../model/cliente';
import { Integrador } from '../../model/integrador'
import ManBusiness from '../../images/man-business.svg'
import WomanBusiness from '../../images/woman-business.svg'
import { Sprint } from '../../model/sprint';

class OverviewCliente extends Component {
  constructor() {
    super();
    this.state = {
    }
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
      <Grid style={{ height: '100%', marginTop: 50 }}>
        <Grid.Row>
          <Grid.Column width={3}>
            <Card align='left' style={{ marginLeft: 20 }} >
              <Image centered src={ManBusiness} fluid />
              <Card.Content>
                <Card.Header>Olá, {this.cliente.name} !</Card.Header>
                <Card.Meta>
                  <span className='office'>{this.cliente.office}</span>
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='mail' />
                  {this.cliente.email}
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column width={8} style={{ marginLeft: 40 }} >
            {/* <h1>SPRINTS</h1> */}
            <Grid.Row style={{ marginRight: 40 }}>
              <Segment raised>
                <Header as='h3'>Sprint 1</Header>
                <Checkbox label={sprintsMock[0].theme} />
                <Segment basic style={{ textAlign: 'justify' }}>
                  {sprintsMock[0].description}
                </Segment>
              </Segment>
            </Grid.Row>
            <br />
            <Grid.Row style={{ marginRight: 40 }}>
              <Segment raised>
                <Header as='h3'>Sprint 2</Header>
                <Checkbox label={sprintsMock[1].theme} />
                <Segment basic style={{ textAlign: 'justify' }}>
                  {sprintsMock[1].description}
                </Segment>
              </Segment>
            </Grid.Row>
          </Grid.Column>

          <Grid.Column width={3}>
            <Card align='left'>
              <Image centered src={WomanBusiness} fluid />
              <Card.Content>
                <Card.Header>{this.integrador.name} quer assumir seu projeto!</Card.Header>
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
              <Card.Content extra>
                <a><Icon name='check circle' style={{ color: "green", fontSize: 22, marginLeft: 40 }} /></a>
                <a><Icon name='close' style={{ color: "red", fontSize: 22, marginLeft: 40 }} /></a>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default OverviewCliente;

const sprintsMock = [
  new Sprint(
    'Criação da interface básica',
    '14/12/2018',
    '21/12/2018',
    'Criação da interface básica da aplicação. Não é necessário que as funcionalidades estejam implementadas, mas sim que haja a identidade visual da aplicação'
  ),
  new Sprint(
    'Roteamento das telas',
    '21/12/2018',
    '28/12/2018',
    'Roteamento das telas de navegação da aplicação. Deve ser possível navegar por todas as telas incluídas no escopo'
  ),
  new Sprint(
    'Permanência dos dados',
    '28/12/2018',
    '05/01/2019',
    'Os dados embutidos na aplicação devem ser armazenados na nuvem e passíveis de serem consultado a qualquer momento.'
  ),
];
