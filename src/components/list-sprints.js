import React, { Component } from 'react';
import Sprint from './sprint';
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
                        <Table.HeaderCell width={1}>Tema</Table.HeaderCell>
                        <Table.HeaderCell width={1}>Início</Table.HeaderCell>
                        <Table.HeaderCell width={1}>Término</Table.HeaderCell>
                        <Table.HeaderCell>Descrição</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Input placeholder='Tema do sprint'/>
                        </Table.Cell>
                        <Table.Cell>
                            <DateInput
                                name="date"
                                placeholder="Data"
                                value={this.state.date}
                                iconPosition="left"
                                onChange={this.handleChange} />
                        </Table.Cell>
                        <Table.Cell>
                            <DateInput
                                name="date"
                                placeholder="Data"
                                value={this.state.date}
                                iconPosition="left"
                                onChange={this.handleChange} />
                        </Table.Cell>
                        <Table.Cell>
                            <Form>
                                <TextArea placeholder='Detalhes do sprint' />
                            </Form>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        )
    }
}
export default ListSprint;
