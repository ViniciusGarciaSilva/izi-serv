import React, { Component } from 'react';
import { Segment, CardGroup, Image, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import IdeaCard from './cards/idea-card';
import ProjectCard from './cards/project-card';
import ServiceCard from './cards/service-card';
import logo3 from '../../images/Logo3.png';
import slogan from '../../images/slogan.png';

class Home extends Component {
  render() {
    return (
      <div>
        <Segment inverted
          color='blue tertiary'
          textAlign='center'
          style={{ minHeight: 250 }}
          vertical
        >
          <Image centered src={logo3} size='small'/>
          <Header size='huge'>
          Aqui, sua vitória é garantida!
          </Header>
        </Segment>
        <CardGroup fluid centered style={{ marginTop: 30 }}>
          <NavLink to='/idea'><IdeaCard /></NavLink>
          <NavLink to='/projetos'><ProjectCard /></NavLink>
          <NavLink to='/servicos'><ServiceCard /></NavLink>
        </CardGroup>
      </div>
    );
  }
}

export default Home;


