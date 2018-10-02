import React, { Component } from 'react';
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
        {/* <HeaderMaster/> */}
        <LoginScreen />
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