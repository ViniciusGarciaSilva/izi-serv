import * as React from 'react';
import { Item, Label, Segment, Divider, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { getProjectList } from './../../data/project.datasource';

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [],
    }
  }

  componentWillMount() {
    this.loadList();
  }

  render() {
    return (
      <Segment style={{ marginTop: 30 }}>
        {this.state.projectList.map(project =>
          <Container>
            <Item.Content style={{ marginTop: 20, marginBottom: 20 }} key={project.name}>
              <Item.Header as='h3'><NavLink to='/projeto-detalhe'>{project.name} </NavLink></Item.Header>
              <Item.Meta>
                <span className='cinema'>Owner: {project.cliente}</span>
              </Item.Meta>
              <Item.Description style={{ marginTop: 15 }}><p>{project.details}</p></Item.Description>
              <Item.Extra style={{ marginTop: 15 }}>
                <Label>{project.theme}</Label>
              </Item.Extra>
            </Item.Content>
            <Divider />
          </Container>
        )}
      </Segment>
    );
  }

  loadList() {
    getProjectList().then(response => {
      console.log(response)
      this.setState({ projectList: response });
    });
  }
}

export default ProjectList;
