import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import TextInputForm from '../../components/TextInputForm/TextInputForm';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registerApp: false,
      registerAppForm: {
        name: '',
        description: '',
        redirectUrl: '',
        logoutUrl: ''
      }
    }
  }

  changeRegisterApp() {
    this.setState({
      registerApp: !this.state.registerApp
    })
  }

  onChange(event, formName, key) {
    let currentState = {...this.state};
    currentState[formName][key] = event.target.value;
    this.setState(
      currentState
    )
  }

  handleCreateApp = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    // const app = { };
    // get id token from local storage and get client id
    const idToken = localStorage.getItem('id_token');
    const sub = jwt_decode(idToken).sub;
    // axios.post ../identities/{sub}/clients
    // if successufl loading = false and deactivate modal

  }

  render() {
    let modelClass = ['modal']
    if (this.state.registerApp === true) {
      modelClass[1] = 'is-active'
    }
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Applications</h1>
          <hr />
        </div>
        <div className="container">
          <div className="columns">
            <div className="column">
              <p className="has-text-left">
                Create and manage your applications that consume platform services.
              </p>
            </div>
            <div className="column has-text-right">
              <a className="button is-primary is-outlined" onClick={() => this.changeRegisterApp()}>Create +</a>
            </div>
          </div>
        </div>
        <div className="container">
          <br />
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Date Created</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Allianz Makler Frontend</td>
                <td>Frontend for the Makler to work.</td>
                <td>19.12.2017</td>
                <td>[-]</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={modelClass.join(' ')}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Register Application</p>
              <button className="delete" aria-label="close" onClick={() => this.changeRegisterApp()}></button>
            </header>
            <section className="modal-card-body">
              <TextInputForm value={this.state.registerAppForm.name} name='Name' placeholder="Allianz Makler Frontend" onChange={(event) => this.onChange(event, 'registerAppForm', 'name')} />
              <TextInputForm value={this.state.registerAppForm.description} name='Description' placeholder="Frontend for the Makler to work." onChange={(event) => this.onChange(event, 'registerAppForm', 'description')} /> 
              <TextInputForm value={this.state.registerAppForm.redirectUrl} name='Redirect URI' placeholder="e.g. https://localhost:8100" onChange={(event) => this.onChange(event, 'registerAppForm', 'redirectUrl')} />
              <TextInputForm value={this.state.registerApp.logoutUrl} name='Allowed Logout URL' placeholder="e.g. https://localhost:8100/logout" onChange={(event) => this.onChange(event, 'registerAppForm', 'logoutUrl')} />
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success" onClick={this.handleCreateApp}>Create</button>
              <button className="button" onClick={() => this.changeRegisterApp()}>Cancel</button>
            </footer>
          </div>
        </div>
      </section>
    )
  }
}

export default Dashboard;


