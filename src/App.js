import React, { Component } from 'react';
import HeaderMaster from './components/header-master'
import Home from './screens/home';
import { Route, Switch } from 'react-router-dom';
import FormProjectScreen from './screens/form-project-screen';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderMaster />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/idea' component={FormProjectScreen} />
        </Switch>
      </div>
    );
  }
}

export default App;