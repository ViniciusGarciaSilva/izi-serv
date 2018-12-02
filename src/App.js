import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpScreen from './presentation/sign-up/sign-up-screen';
import Prestadores from './presentation/list-prestadores/prestadores';
import FormProjectScreen from './presentation/form-project/form-project.screen';
import HomeCliente from './presentation/home-cliente/home-cliente.screen';
import OverviewCliente from './presentation/overview-cliente/overview-cliente';
import LoginScreen from './presentation/login/login-screen';
import Home from './presentation/home/home';
import HeaderMaster from './components/header-master';
import ProjectsList from './presentation/projects-list/projects-list.screen';
import { Container } from 'semantic-ui-react';

class App extends Component {
  handleItemClick() {
    return;
  }

  render() {
    return (
      <div>
      <HeaderMaster/>
        <Container style={{paddingTop: 43}}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/idea' component={FormProjectScreen} />
            <Route path='/minha-conta' component={HomeCliente} />
            <Route path='/projeto' exact component={OverviewCliente} />
            <Route path='/cadastro' exact component={SignUpScreen} />
            <Route path='/login' exact component={LoginScreen} />
            <Route path='/prestadores' component={Prestadores} />
            <Route path='/projetos' component={ProjectsList} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;