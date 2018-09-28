import React, { Component } from 'react';
import Home from './screens/home'
import './App.css';
import HeaderMaster from './components/header-master'

class App extends Component {

  handleItemClick() {
    return;
  }

  render() {
    return (
      <div>
        <HeaderMaster />
        <Home />
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