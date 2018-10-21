import React, { Component } from 'react';
import HeaderMaster from './components/header-master'
import Home from './screens/home';
import HomeCliente from './screens/home-cliente';
import OverviewCliente from './screens/overview-cliente';
import { Route, Switch } from 'react-router-dom';
import FormProjectScreen from './screens/form-project-screen';
import LoginScreen from './screens/login-screen';
import SignUpScreen from './screens/sign-up-screen';

class App extends Component {
  handleItemClick() {
    return;
  }

  render() {
    return (
      <div>
        <HeaderMaster/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/idea' component={FormProjectScreen} />
          <Route path='/minha-conta' component={HomeCliente} />
          <Route path="/projeto" exact component={OverviewCliente} />
          <Route path="/cadastro" exact component={SignUpScreen} />
          <Route path="/login" exact component={LoginScreen} />
        </Switch>
      </div>
    );
  }
}

export default App;