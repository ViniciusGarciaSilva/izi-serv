import React, { Component } from 'react';
import RequirementComponent from './requirement.component';
import { Button, Container } from 'semantic-ui-react';
import Requirement from '../global/requirement';

class ListRequirement extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            listRequirements: this.props.listRequirements,
        }
    }

    handleButton = () => {
        this.pushRequirement();
    }

    pushRequirement() {
        var listRequirements = this.state.listRequirements;
        listRequirements.push(new Requirement('',''));
        this.setState({listRequirements: listRequirements});
    }

    onChangeRequirement = (name, priority, index) => {
        var listRequirements = this.state.listRequirements;
        listRequirements[index] = {name, priority};
        this.setState({ listRequirements: listRequirements });
        console.log(listRequirements);
    }

    render() {
        return (
            <Container>
                { this.state.listRequirements ? 
                    this.state.listRequirements.map( (requirement,index) => (
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
