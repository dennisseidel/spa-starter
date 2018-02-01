import React, { Component } from 'react';
import { Reboot } from 'material-ui';
import './App.css';
import Routes from './Routes';
import NavBar from '../../components/NavBar/NavBar';
import logo from './ecosphere-logo.svg';

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
    const navElements = [{
      name: 'Home',
      url: '/'
    },
    {
      name: 'Product Index',
      url: '/products'
    }];
    return (
      <div className="App">
        <Reboot />  
        <NavBar logo={logo} width='150' height='25' elements={navElements} isAuthenticated={this.state.isAuthenticated}/>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;
