import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';


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
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;
