import React, { Component } from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar, Grid, GridColumn, Checkbox } from 'semantic-ui-react';

class OverviewCliente extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <Sidebar.Pushable as={Segment} style={{marginTop: 0}}>
                <Grid style={{height:'100%'}}>
                    <Grid.Row>
                        <Grid.Column width={2}>
                            <Sidebar as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>
                                <Menu.Item as='a' active={false}>
                                    <Icon name='user circle' />
                                    Profile
                                </Menu.Item>
                                <Menu.Item as='a' active={false}>
                                    <Icon name='chart line' />
                                    Charts
                                </Menu.Item>
                                <Menu.Item as='a' active={true}>
                                    <Icon name='tasks' />
                                    Sprints
                                </Menu.Item>
                            </Sidebar>
                        </Grid.Column>

                        <Grid.Column width={14}>
                            <h1>SPRINTS</h1>
                            <Grid.Row style={{marginRight: 40}}>
                                <Sidebar.Pusher>
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

                                </Sidebar.Pusher>
                            </Grid.Row>
                            <br/>
                            <Grid.Row style={{marginRight: 40}}>
                                <Sidebar.Pusher>
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
                                </Sidebar.Pusher>
                            </Grid.Row>

                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Sidebar.Pushable>


        );
    }
}

export default OverviewCliente;
