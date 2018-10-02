import React, { Component } from 'react';
import GeneralInfo from '../components/general-info';
import ListRequirement from '../components/list-requirement';
import ListSprint from '../components/list-sprints';
import { Container, Segment, Header, Button} from 'semantic-ui-react';

class FormProjectScreen extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Container>
                <Container style={{marginTop: 30}}>
                    <Header as='h2'>Informações Gerais</Header>
                    <Segment ><GeneralInfo/></Segment>
                </Container>
                <Container style={{marginTop: 30}}>
                    <Header as='h2'>Requisitos Funcionais</Header>
                    <Segment><ListRequirement/></Segment>
                </Container>
                <Container style={{marginTop: 30}}>
                    <Header as='h2'>Requisitos Não-Funcionais</Header>
                    <Segment><ListRequirement/></Segment>
                </Container>
                <Container style={{marginTop: 30}}>
                    <Header as='h2'>Sprints</Header>
                    <Segment><ListSprint/></Segment>      
                </Container>
                <Container textAlign='center' style={{marginTop: 30, width: 150, marginBottom: 30  }}>
                    <Button fluid size='big' center color='blue'>Enviar</Button>
                </Container>
               
            </Container>
        )
    }
}
export default FormProjectScreen;