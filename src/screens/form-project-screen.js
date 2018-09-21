import React, { Component } from 'react';
import GeneralInfo from '../components/general-info';
import ListRequirement from '../components/list-requirement';
import ListSprint from '../components/list-sprints';

class FormProjectScreen extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <GeneralInfo />
                <ListRequirement />
                <ListRequirement />
                <ListSprint/>
            </div>
        )
    }
}
export default FormProjectScreen;
