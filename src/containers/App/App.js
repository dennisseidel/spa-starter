import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      <div className="App">
        <NavBar />
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;
