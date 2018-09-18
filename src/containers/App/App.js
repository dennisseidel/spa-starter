import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          { /* Finally, catch all unmatched routes */ }
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
