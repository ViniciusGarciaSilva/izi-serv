import React, { Component } from 'react';
import GeneralInfo from '../components/general-info/general-info';
import ListRequirement from '../components/list-requirement/list-requirement';
import ListSprint from '../components/list-sprints/list-sprints';
import { Container, Segment, Header } from 'semantic-ui-react';

class FormProjectScreen extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Container>
                <Header as='h2'>Informações Gerais</Header>
                <Segment ><GeneralInfo/></Segment>
                <Header as='h2'>Requisitos Funcionais</Header>
                <Segment><ListRequirement/></Segment>
                <Header as='h2'>Requisitos Não-Funcionais</Header>
                <Segment><ListRequirement/></Segment>
                <Header as='h2'>Sprints</Header>
                <Segment><ListSprint/></Segment>      
            </Container>
            
        )
    }
}
export default FormProjectScreen;
