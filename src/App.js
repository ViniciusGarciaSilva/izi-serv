import React, { Component } from 'react';
<<<<<<< HEAD
import FormServiceScreen from './screens/form-service-screen'
=======
import HomeIntegrador from './screens/home-integrador'
>>>>>>> feature/homeIntegrador
import './App.css';
import FormProjectScreen from './screens/form-project-screen';
import LoginScreen from './screens/login-screen';
import HeaderMaster from './components/header-master'

class App extends Component {

  handleItemClick() {
    return;
  }

  render() {
    return (
      <div>
        <HeaderMaster />
<<<<<<< HEAD
        <FormServiceScreen />
=======
        <HomeIntegrador />
>>>>>>> feature/homeIntegrador
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