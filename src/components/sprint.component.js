import React, { Component } from 'react';
import { DateInput } from 'semantic-ui-calendar-react';
import { Table, Input, TextArea, Form } from 'semantic-ui-react'

class SprintComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sprint: this.props.sprint,
    };
  }

  render() {
    return (
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Input
              placeholder='Tema do sprint'
              value={this.state.sprint.theme}
              onChange={(event, data) => this.handleChangeTheme(event, data)}
            />
          </Table.Cell>
          <Table.Cell>
            <DateInput
              name="date"
              placeholder="Data"
              value={this.state.sprint.start}
              iconPosition="left"
              onChange={(event, data) => this.handleChangeStart(event, data)}
            />
          </Table.Cell>
          <Table.Cell>
            <DateInput
              name="date"
              placeholder="Data"
              value={this.state.sprint.end}
              iconPosition="left"
              onChange={(event, data) => this.handleChangeEnd(event, data)}
            />
          </Table.Cell>
          <Table.Cell>
            <Form>
              <TextArea
                placeholder='Descrição do sprint'
                value={this.state.sprint.value}
                onChange={(event, data) => this.handleChangeDescription(event, data)}
              />
            </Form>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    )
  }

  handleChangeTheme = (event, data) => {
    var theme = data.value;
    var sprint = this.state.sprint;
    sprint.theme = theme;
    this.setState({sprint: sprint});
    this.props.onChangeSprint(this.state.sprint, this._reactInternalFiber.key);
  }

  handleChangeStart = (event, data) => {
    var start = data.value;
    var sprint = this.state.sprint;
    sprint.start = start;
    this.setState({sprint: sprint});
    this.props.onChangeSprint(this.state.sprint, this._reactInternalFiber.key);
  }

  handleChangeEnd = (event, data) => {
    var end = data.value;
    var sprint = this.state.sprint;
    sprint.end = end;
    this.setState({sprint: sprint});
    this.props.onChangeSprint(this.state.sprint, this._reactInternalFiber.key);
  }

  handleChangeDescription = (event, data) => {
    var description = data.value;
    var sprint = this.state.sprint;
    sprint.description = description;
    this.setState({sprint: sprint});
    this.props.onChangeSprint(this.state.sprint, this._reactInternalFiber.key);
  }
}
export default SprintComponent;