import React, { Component } from 'react';
import { Card, Header, Icon, Image, Menu, Segment, Sidebar, Grid, GridColumn, Checkbox } from 'semantic-ui-react';
import Project from '../global/project';
import Cliente from '../global/cliente';
import Integrador from '../global/integrador'
import ManBusiness from '../images/man-business.svg'
import WomanBusiness from '../images/woman-business.svg'

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
                <Grid style={{height:'100%', marginTop: 50}}>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Card align='left' style={{marginLeft: 20}} >
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

                        <Grid.Column width={8} style={{marginLeft: 40}} >
                            {/* <h1>SPRINTS</h1> */}
                            <Grid.Row style={{marginRight: 40}}>
                                <Segment raised>
                                    <Header as='h3'>Sprint 1</Header>
                                    <Checkbox label='Starting project' />
                                    <Segment basic style={{textAlign: 'justify'}}>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                        Aenean commodo ligula eget dolor. Aenean massa strong. 
                                        Cum sociis natoque penatibus et magnis dis parturient montes, 
                                        nascetur ridiculus mus. Donec quam felis, ultricies nec, 
                                        pellentesque eu, pretium quis, sem. 
                                        Nulla consequat massa quis enim. Donec pede justo, fringilla vel, 
                                        aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, 
                                        imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede 
                                        link mollis pretium. Integer tincidunt. Cras dapibus. 
                                        Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. 
                                        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. 
                                        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. 
                                        Phasellus viverra nulla ut metus varius laoreet. 
                                        Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. 
                                        Curabitur ullamcorper ultricies nisi.
                                    </Segment>
                                </Segment>
                            </Grid.Row>
                            <br/>
                            <Grid.Row style={{marginRight: 40}}>
                                <Segment raised>
                                    <Header as='h3'>Sprint 2</Header>
                                    <Checkbox label='Feature 1' />
                                    <Segment basic style={{textAlign: 'justify'}}>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                        Aenean commodo ligula eget dolor. Aenean massa strong. 
                                        Cum sociis natoque penatibus et magnis dis parturient montes, 
                                        nascetur ridiculus mus. Donec quam felis, ultricies nec, 
                                        pellentesque eu, pretium quis, sem. 
                                        Nulla consequat massa quis enim. Donec pede justo, fringilla vel, 
                                        aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, 
                                        imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede 
                                        link mollis pretium. Integer tincidunt. Cras dapibus. 
                                        Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. 
                                        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. 
                                        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. 
                                        Phasellus viverra nulla ut metus varius laoreet. 
                                        Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. 
                                        Curabitur ullamcorper ultricies nisi.
                                    </Segment>
                                </Segment>
                            </Grid.Row>
                        </Grid.Column>

                        <Grid.Column width={3}>
                            <Card align='left'>
                                <Image centered src={WomanBusiness} fluid />
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
                                <Card.Content extra>
                                    <a><Icon name='check circle' style={{color: "green", fontSize:22, marginLeft:40}} /></a>
                                    <a><Icon name='close' style={{color: "red", fontSize:22, marginLeft:40}} /></a>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        );
    }
}

export default OverviewCliente;
