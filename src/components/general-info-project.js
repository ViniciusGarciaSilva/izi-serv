import React, { Component } from 'react';
import { Form, Select } from 'semantic-ui-react';

const options = [
    { key: 'android', text: 'Android', value: 'android' },
    { key: 'ios', text: 'IOS', value: 'ios' },
    { key: 'web', text: 'Web', value: 'web' },
    { key: 'outros', text: 'Outros', value: 'outros' },
]

class GeneralInfoProject extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Nome do Projeto' placeholder='Nome do Projeto' />
                    <Form.Field control={Select} label='Tema do Projeto' options={options} placeholder='Tema do Projeto' />
                </Form.Group>
                <Form.TextArea label='Detalhes' placeholder='Descreva com mais detalhes seu projeto' />
            </Form>
        )
    }
}
export default GeneralInfoProject;