import React, { Component } from 'react';
import Requirement from './requirement';
import { Container } from 'semantic-ui-react';

class ListRequirement extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Container>
                <Requirement />
                <Requirement />
                <Requirement />
            </Container>
        )
    }
}
export default ListRequirement;
