import React, { Component } from 'react';
import { Button, Container, Table } from 'semantic-ui-react'
import SprintComponent from './sprint.component';
import { Sprint } from './../model/sprint';

class ListSprint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sprintList: this.props.sprintList,
    }
  }

  render() {
    return (
      <Container>
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={1}>Tema</Table.HeaderCell>
              <Table.HeaderCell width={1}>Início</Table.HeaderCell>
              <Table.HeaderCell width={1}>Término</Table.HeaderCell>
              <Table.HeaderCell>Descrição</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {this.state.sprintList ?
            this.state.sprintList.map( (sprint, index) => (
              <SprintComponent
                key={index}
                sprint={sprint}
                validSprint={this.validSprint}
                onChangeSprint={this.handleChangeSprint}
              />
            ))
            : null
          }
        </Table>
        <Button onClick={this.handleButton}>Adicionar</Button>
      </Container>   
    )
  }

  handleButton = () => {
    var sprintList;
    if(!this.state.sprintList)
      sprintList=[];
    else 
      sprintList = this.state.sprintList;
    sprintList.push(new Sprint());
    this.setState({ sprintList: sprintList });
    this.props.validForms(this.state.validSprints, false);
  }

  handleChangeSprint = (sprint, index) => {
    var sprintList = this.state.sprintList;
    sprintList[index] = sprint;
    this.setState({sprintList: sprintList});
    if(this.validSprints()) {
      this.props.validForms(this.state.sprintList, true);
    } else {
      this.props.validForms(this.state.sprintList, false);
    }
  }

  checkTheme(theme) {
    return theme!==(''||null);
  }

  checkStart(start) {
    return start!==(''||null);
  }

  checkEnd(end) {
    return end!==(''||null);
  }

  checkDescription(description) {
    return description!==(''||null);
  }

  validSprints() {
    if ( this.state.sprintList.length===0 ) {
      return false;
    }
    for ( var i=0 ; i<this.state.sprintList.length ; i++ ) {
      if ( 
        !this.checkTheme(this.state.sprintList[i].theme) ||
        !this.checkStart(this.state.sprintList[i].start) ||
        !this.checkEnd(this.state.sprintList[i].end) ||
        !this.checkDescription(this.state.sprintList[i].description)
      ) {
        return false;
      } 
    }
    return true;
  }

}
export default ListSprint;
