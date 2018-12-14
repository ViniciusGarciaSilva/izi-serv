import * as React from 'react';
import { Item, Label, Segment, Divider, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { getServiceList } from './../../data/service-list.datasource';

class ServiceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceList: [],
    }
  }

  componentWillMount() {
    this.loadList();
  }

  render() {
    return (
      <Segment style={{ marginTop: 30 }}>
        {this.state.serviceList.map((service) =>
          <Container>
            <Item.Content style={{ marginTop: 20, marginBottom: 20 }} key={service.name}>
              <Item.Header as='h3'><NavLink to='/servicos'>{service.name} </NavLink></Item.Header>
              <Item.Meta>
                <span className='cinema'>Employer: {service.integrador}</span>
              </Item.Meta>
              <Item.Description style={{ marginTop: 15 }}><p>{service.details}</p></Item.Description>
              <Item.Extra style={{ marginTop: 15 }}>
                <Label>{service.theme}</Label>
              </Item.Extra>
            </Item.Content>
            <Divider />
          </Container>
        )}
      </Segment>
    );
  }

  loadList() {
    const serviceList = getServiceList();
    this.setState({ serviceList: serviceList });
  }
}

export default ServiceList;
