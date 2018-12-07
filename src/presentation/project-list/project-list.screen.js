import * as React from 'react';
import { Item, Label, Segment, Grid, Card, Image, Icon, Divider, Header, Container } from 'semantic-ui-react';
import { NavLink, Route } from 'react-router-dom';
import { getProjectList } from './../../data/project.datasource';

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [],
    }
  }

  componentWillMount(){
    this.loadList();
  }
  
  mapperproject(projectList) {
    return (
      projectList.map((project) =>
      <Container>
        <Item.Content style={{marginTop:20, marginBottom: 20}} key={project.name}>
          <Item.Header as='h3'><NavLink to='/projeto-detalhe'>{project.name} </NavLink></Item.Header>
          <Item.Meta>
            <span className='cinema'>Owner: {project.cliente}</span>
          </Item.Meta>
          <Item.Description style={{ marginTop: 15 }}><p>{project.details}</p></Item.Description>
          <Item.Extra style={{ marginTop: 15 }}>
            <Label>{project.theme}</Label>
          </Item.Extra>
        </Item.Content>
        <Divider/>
      </Container>
      )
    );
  }
  
  render() {
    return (
      <Segment style={{marginTop: 30}}>
        {this.mapperproject(this.state.projectList)}
      </Segment>
    );
  }

  loadList() {
    const projectList = getProjectList();
    this.setState({projectList: projectList});
  }
}

export default ProjectList;
