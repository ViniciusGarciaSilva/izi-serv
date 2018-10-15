import React, { Component } from 'react';
import GeneralInfoProject from '../components/general-info-project';
import ListRequirement from '../components/list-requirement';
import ListSprint from '../components/list-sprints';
import { Container, Segment, Header, Button } from 'semantic-ui-react';
import StepsIdea from '../components/step-idea'

class FormProjectScreen extends Component {
    constructor() {
        super();
        this.state = {
            step: 1,
        }
    }

    renderForm() {
        console.log(this.state.step);
        if (this.state.step === 1) {
            return (
                <Container style={{ marginTop: 30 }}>
                    <Header as='h2'>Informações Gerais</Header>
                    <Segment ><GeneralInfoProject /></Segment>
                </Container>
            )
        }
        if (this.state.step == 2) {
            return (
                <Container style={{ marginTop: 30 }}>
                    <Header as='h2'>Requisitos Funcionais</Header>
                    <Segment><ListRequirement /></Segment>
                </Container>
            )
        }
        if (this.state.step == 3) {
            return (
                <Container style={{ marginTop: 30 }}>
                    <Header as='h2'>Requisitos Não-Funcionais</Header>
                    <Segment><ListRequirement /></Segment>
                </Container>
            )
        }
        if (this.state.step == 4) {
            return (
                <Container style={{ marginTop: 30 }}>
                    <Header as='h2'>Sprints</Header>
                    <Segment><ListSprint /></Segment>
                </Container>
            )
        }
    }

    onStepClick = (step) => {
        this.setState({step: step});
    }

    render() {
        return (
            <Container style={{ marginTop: 100 }} >
                <StepsIdea
                    step={this.state.step}
                    onClick={this.onStepClick}
                />
                {this.renderForm()}
                <Container textAlign='center' style={{ marginTop: 30, width: 150, marginBottom: 30 }}>
                    <Button fluid size='big' center color='blue' onClick={() => this.setState({ step: this.state.step + 1 })}>Enviar</Button>
                </Container>
            </Container>
        )
    }
}
export default FormProjectScreen;