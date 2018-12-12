import React, { Component } from 'react';
import { Button, Container } from 'semantic-ui-react';
import { Requirement } from './../model/requirement';
import RequirementComponent from './../presentation/form-service/requirement.component';

class ListRequirement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listRequirements: this.props.listRequirements,
    }
  }

  handleButton = () => {
    this.pushRequirement();
    this.props.validForms(this.state.listRequirements, false);
  }

  pushRequirement() {
    var listRequirements = this.state.listRequirements;
    listRequirements.push(new Requirement('', ''));
    this.setState({ listRequirements: listRequirements });
  }

  onChangeRequirement = (name, priority, index) => {
    var listRequirements = this.state.listRequirements;
    listRequirements[index] = { name, priority };
    this.setState({ listRequirements: listRequirements });
    this.checkValidRequirements();
  }

  checkValidRequirements() {
    if (this.state.listRequirements.length === 0) {
      this.props.validForms(this.state.listRequirements, false);
      return;
    }
    for (var i = 0; i < this.state.listRequirements.length; i++) {
      if (this.state.listRequirements[i].name === (''||null) || this.state.listRequirements[i].priority === (''||null) ) {
        this.props.validForms(this.state.listRequirements, false);
        return;
      }
    }
    this.props.validForms(this.state.listRequirements, true);
    return;
  }

  render() {
    return (
      <Container>
        {this.state.listRequirements ?
          this.state.listRequirements.map((requirement, index) => (
            <RequirementComponent
              key={index}
              requirement={requirement}
              onChangeRequirement={this.onChangeRequirement}
            />
          ))
          : null
        }
        <Button onClick={this.handleButton} >Adicionar</Button>
      </Container>
    )
  }
}
export default ListRequirement;
