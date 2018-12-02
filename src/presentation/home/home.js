import React, { Component, View } from 'react';
import { Segment, CardGroup } from 'semantic-ui-react';
import { Route, NavLink } from 'react-router-dom';
import IdeaCard from './cards/idea-card';
import ProjectCard from './cards/project-card';
import ServiceCard from './cards/service-card';


class Home extends Component {

  render() {
    return (
      <div>
        <Segment inverted
          color='blue tertiary'
          textAlign='center'
          style={{ minHeight: 300 }}
          vertical
        >
        </Segment>
        <CardGroup fluid centered style={{ marginTop: 50 }}>
          <NavLink to='/idea'><IdeaCard /></NavLink>
          <NavLink to='/projetos'><ProjectCard/></NavLink>
          <NavLink to='/servicos'><ServiceCard/></NavLink>
        </CardGroup>
      </div>
    );
  }
}

export default Home;


