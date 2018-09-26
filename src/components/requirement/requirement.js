import React, { Component } from 'react';
import { Container, Form } from 'semantic-ui-react';

const options = [
    { key: 'alta', text: 'Alta', value: 'high' },
    { key: 'media', text: 'Média', value: 'medium' },
    { key: 'baixa', text: 'Baixa', value: 'low' },
]

class Requirement extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Requisito' placeholder='Nome do Requisito'/>
                    <Form.Select fluid label='Prioridade' placeholder='Nível de prioridade' options={options}/>
                </Form.Group>
            </Form>
        )
    }
}
export default Requirement;