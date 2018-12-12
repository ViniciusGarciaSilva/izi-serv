import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

const options = [
  { key: 'alta', text: 'Alta', value: 'high' },
  { key: 'media', text: 'Média', value: 'medium' },
  { key: 'baixa', text: 'Baixa', value: 'low' },
]

class RequirementComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requirement: this.props.requirement,
    }
  }

  handleNameChange = (name) => {
    var requirement = this.state.requirement;
    requirement = { name: name, priority: requirement.priority };
    this.setState({ requirement: requirement })
    this.props.onChangeRequirement(
      name,
      this.state.requirement.priority,
      this._reactInternalFiber.key
    )
  }

  handlePriorityChange = (event, data) => {
    var requirement = this.state.requirement;
    var priority = data.value;
    requirement.priority = priority;
    this.setState({ requirement: requirement })
    this.props.onChangeRequirement(
      this.state.requirement.name,
      priority,
      this._reactInternalFiber.key
    )
  }

  render() {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label='Requisito'
            placeholder='Nome do Requisito'
            value={this.state.requirement.name}
            onChange={(event) => this.handleNameChange(event.target.value)}
          />
          <Form.Select
            fluid
            label='Prioridade'
            placeholder='Nível de prioridade'
            value={this.state.requirement.priority}
            options={options}
            onChange={(event, data) => this.handlePriorityChange(event.target.value, data)}
          />
        </Form.Group>
      </Form>
    )
  }
}
export default RequirementComponent;