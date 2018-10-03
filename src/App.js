import React, { Component } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import FormServiceScreen from './screens/form-service-screen'
=======
import HomeIntegrador from './screens/home-integrador'
>>>>>>> feature/homeIntegrador
=======
import HomePrestador from './screens/home-prestador'
>>>>>>> feature/homePrestador
import './App.css';
import FormProjectScreen from './screens/form-project-screen';
import LoginScreen from './screens/login-screen';
import HeaderMaster from './components/header-master'
import Home from './screens/home';

class App extends Component {

  handleItemClick() {
    return;
  }

  render() {
    return (
      <div>
        <HeaderMaster />
<<<<<<< HEAD
<<<<<<< HEAD
        <FormServiceScreen />
=======
        <HomeIntegrador />
>>>>>>> feature/homeIntegrador
=======
        <HomePrestador />
>>>>>>> feature/homePrestador
      </div>
    );
  }
}

export default App;

/*
<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"/>
*/