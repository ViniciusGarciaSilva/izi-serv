import React, { Component } from 'react';
import Requirement from './requirement';

class ListRequirement extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Requisitos</legend>
                        <Requirement />
                        <Requirement />
                        <Requirement />
                    </fieldset>
                </form>
            </div>
        )
    }
}
export default ListRequirement;
