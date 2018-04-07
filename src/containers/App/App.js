import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import Dashboard from '../Dashboard/Dashboard';
import Callback from '../../components/Callback/Callback';
import NavBar from '../../components/NavBar/NavBar';
import Auth from '../../services/Auth/Auth';
import logo from './logo.svg';

const auth = new Auth();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: auth.isAuthenticated()
    }
  }
  handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      auth.handleAuthentication();
      this.setState({
        isAuthenticated: true
      })
      this.props.history.push("/"); 
    }
  }
  login() {
    auth.login()
  }
  logout() {
    auth.logout()
    this.setState({
      isAuthenticated: false
    })
    this.props.history.push("/")
  }
  isAuthenticated() {
    auth.isAuthenticated()
  }
  setSession(authResult) {
    auth.setSession(authResult)
  }

  render() {
    const navElements = [{
      name: 'Home',
      url: '/'
    },
    {
      name: 'Product Index',
      url: '/products'
    },
    {
      name: 'Request API',
      url: '/requestapi'
    }
  ];
    const privateElements = [{
      name: 'Manage',
      url: '/manage'
    },
    {
      name: 'Build API',
      url: '/buildapi'
    }
  ]
    const authFunc = {
      login: this.login,
      logout: this.logout.bind(this),
      isAuthenticated: this.state.isAuthenticated,
      setSession: this.setSession
    }
    return (
      <div className="App">
        <NavBar logo={logo} width='150' height='25' elements={navElements} rightElements={privateElements} auth={authFunc} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/manage" exact component={Dashboard} />
          <Route path="/callback" render={(props) => {
            this.handleAuthentication(props);
            return <Callback {...props} />
          }}/>
          { /* Finally, catch all unmatched routes */ }
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
