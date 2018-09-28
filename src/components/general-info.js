import React, { Component } from 'react';
import { Form, Select } from 'semantic-ui-react';

const options = [
    { key: 'android', text: 'Android', value: 'android' },
    { key: 'ios', text: 'IOS', value: 'ios' },
    { key: 'web', text: 'Web', value: 'web' },
    { key: 'outros', text: 'Outros', value: 'outross' },
]

class GeneralInfo extends Component {
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
                    <Form.Field control={Select} label='Tema' options={options} placeholder='Tema' />
                </Form.Group>
                <Form.TextArea label='Detalhes' placeholder='Descreva com mais detalhes seu projeto' />
            </Form>
        )
    }
}
export default GeneralInfo;