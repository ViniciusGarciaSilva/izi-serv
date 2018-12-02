import React, { Component } from 'react';
import { Form, Select } from 'semantic-ui-react';

const options = [
  { key: 'java', text: 'Java', value: 'java' },
  { key: 'c++', text: 'C++', value: 'c++' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'outros', text: 'Outros', value: 'outros' },
]

class GeneralInfoService extends Component {
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
          <Form.Input fluid label='Nome da Vaga' placeholder='Nome da Vaga' />
          <Form.Field control={Select} label='Tema da Vaga' options={options} placeholder='Tema da Vaga' />
        </Form.Group>
        <Form.TextArea label='Detalhes do serviço' placeholder='Descreva com mais detalhes o serviço a ser prestado' />
      </Form>
    )
  }
}
export default GeneralInfoService;