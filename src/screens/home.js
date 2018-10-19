import React, { Component } from 'react';
import IdeaCard from '../components/cards/idea-card';
import ProjectCard from '../components/cards/project-card';
import ServiceCard from '../components/cards/service-card';
import { Segment, CardGroup } from 'semantic-ui-react';
import { Route, NavLink } from 'react-router-dom';


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
          <NavLink to='/projetos'><ProjectCard /></NavLink>
          <NavLink to='/servicos'><ServiceCard /></NavLink>
        </CardGroup>




      </div>
    );
  }
}

export default Home;


