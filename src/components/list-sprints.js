import React, { Component } from 'react';
import Requirement from './requirement';
import Sprint from './sprint';

class ListSprint extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Sprints</legend>
                        <Sprint />
                        <Sprint />
                        <Sprint />
                    </fieldset>
                </form>
            </div>
        )
    }
}
export default ListSprint;
