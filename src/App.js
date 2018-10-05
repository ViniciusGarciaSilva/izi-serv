import React, { Component } from 'react';
import FormServiceScreen from './screens/form-service-screen'
import HomeIntegrador from './screens/home-integrador'
import HomePrestador from './screens/home-prestador'
import './App.css';
import FormProjectScreen from './screens/form-project-screen';
import LoginScreen from './screens/login-screen';
import HeaderMaster from './components/header-master'
import Home from './screens/home';
import HomeCliente from './screens/home-cliente';

class App extends Component {

  handleItemClick() {
    return;
  }

  render() {
    return (
      <div>
        <LoginScreen/>
        <HeaderMaster />
        <Home/>
        <HomeCliente/>
        <HomeIntegrador/>
        <HomePrestador/>
        <FormProjectScreen/>
        <FormServiceScreen/>    
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