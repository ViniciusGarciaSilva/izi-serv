import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

const options = [
  { key: 'android', text: 'Android', value: 'android' },
  { key: 'ios', text: 'IOS', value: 'ios' },
  { key: 'web', text: 'Web', value: 'web' },
  { key: 'Database', text: 'Database', value: 'Database' },
  { key: 'I.A', text: 'I.A', value: 'I.A' },
  { key: 'Automation', text: 'Automation', value: 'Automation' },
  { key: 'Video', text: 'Video', value: 'Video' },
  { key: 'Audio', text: 'Audio', value: 'Audio' },
  { key: 'Eletronic', text: 'Eletronic', value: 'Eletronic' },
  { key: 'outros', text: 'Outros', value: 'outros' }
]

class GeneralInfoProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectTheme: this.props.projectTheme,
      projectName: this.props.projectName,
      projectDetails: this.props.projectDetails,
      themeValid: false,
      nameValid: false,
      detailsValid: false,
    }
  }

  onChangeProjectName = (event) => {
    var name = event.target.value;
    var nameValid = this.checkName(name);
    this.setState({
      projectName: name, nameValid: nameValid
    },
      this.checkValidForm(nameValid, this.state.themeValid, this.state.detailsValid)
    );
  }

  onChangeProjectTheme = (event, data) => {
    var theme = data.value;
    var themeValid = this.checkTheme(theme);
    this.setState({
      projectTheme: theme,
      themeValid: themeValid,
    },
      this.checkValidForm(this.state.nameValid, themeValid, this.state.detailsValid)
    );
  }

  onChangeProjectDetails = (event) => {
    const details = event.target.value;
    const detailsValid = this.checkName(details);
    this.setState({
      projectDetails: details,
      detailsValid: detailsValid,
    },
      this.checkValidForm(this.state.nameValid, this.state.themeValid, detailsValid)
    );
  }

  checkValidForm = (nameValid, themeValid, detailsValid) => () => {
    this.props.validForms(
      this.state.projectName,
      this.state.projectTheme,
      this.state.projectDetails,
      themeValid && nameValid && detailsValid,
    );
  }

  checkName(name) {
    var nameRegex = new RegExp('[a-zA-Z0-9]{4,}');
    return nameRegex.test(name);
  }

  checkTheme(theme) {
    return theme !== '';
  }

  checkDetails(details) {
    var detailsRegex = new RegExp('[a-zA-Z0-9]{4,}');
    return detailsRegex.test(details);
  }

  componentDidMount() {
    this.setState({
      nameValid: this.checkName(this.state.projectName),
      detailsValid: this.checkDetails(this.state.projectDetails),
      themeValid: this.checkTheme(this.state.projectTheme),
    });
  }

  render() {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label='Nome do Projeto'
            placeholder='Nome do Projeto'
            value={this.state.projectName}
            onChange={(event) => this.onChangeProjectName(event)}
          />
          <Form.Select
            label='Tema do Projeto'
            options={options}
            value={this.state.projectTheme}
            placeholder='Tema do Projeto'
            onChange={(event, data) => this.onChangeProjectTheme(event, data)}
          />
        </Form.Group>
        <Form.TextArea
          label='Detalhes'
          placeholder='Descreva com mais detalhes seu projeto'
          value={this.state.projectDetails}
          onChange={(event) => this.onChangeProjectDetails(event)}
        />
      </Form>
    )
  }
}
export default GeneralInfoProject;