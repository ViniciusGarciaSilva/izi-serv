import React, { Component } from 'react';
import { Form, Select } from 'semantic-ui-react';
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
} from 'semantic-ui-calendar-react';

class Sprint extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: '',
            time: '',
            dateTime: '',
            datesRange: ''
        };
    }

    render() {
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Sprint' placeholder='Tema do Sprint' />
                    <DateInput
                        label='Data do Sprint'
                        name="date"
                        placeholder="Date"
                        value={this.state.date}
                        iconPosition="left"
                        onChange={this.handleChange} />
                </Form.Group>
                <Form.TextArea label='Detalhes' placeholder='Descreva com mais detalhes seu projeto' />
            </Form>

        )
    }
}
export default Sprint;