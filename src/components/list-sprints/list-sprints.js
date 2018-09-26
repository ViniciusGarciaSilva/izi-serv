import React, { Component } from 'react';
import Sprint from '../sprint/sprint';
import { Table, Input, TextArea, Form } from 'semantic-ui-react'
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
} from 'semantic-ui-calendar-react';

class ListSprint extends Component {
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
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width={3}>Tema</Table.HeaderCell>
                        <Table.HeaderCell width={2}>Início</Table.HeaderCell>
                        <Table.HeaderCell width={2}>Término</Table.HeaderCell>
                        <Table.HeaderCell>Descrição</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Input />
                        </Table.Cell>
                        <Table.Cell>
                            <DateInput
                                name="date"
                                placeholder="Date"
                                value={this.state.date}
                                iconPosition="left"
                                onChange={this.handleChange} />
                        </Table.Cell>
                        <Table.Cell>
                            <DateInput
                                name="date"
                                placeholder="Date"
                                value={this.state.date}
                                iconPosition="left"
                                onChange={this.handleChange} />
                        </Table.Cell>
                        <Table.Cell>
                            <Form>
                                <TextArea placeholder='Tell us more' />
                            </Form>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        )
    }
}
export default ListSprint;
