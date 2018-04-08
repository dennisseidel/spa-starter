import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import config from '../../config';

class ClientDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      client: {
          "client_description": "",
          "client_id": "",
          "client_secret": "",
          "client_name": "Loading ...",
          "date_created": ""
        },
      products: [
        {
          productName: 'Contracts',
          productDescription: 'Access zealous contracts with customer concent.',
          productRights: [
            "https://api.d10l.de/contracts:read",
            "https://api.d10l.de/contracts:write"
          ]
        },
      ]
    }
  }

  componentDidMount() {
    const clientid = this.props.match.params.clientid
    const idToken = localStorage.getItem('id_token');
    const sub = jwt_decode(idToken).sub;
    var reqConfig = {
      headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
    };
    axios.get(`${config.identitiesServices.URL}/identities/${sub}/clients/${clientid}`, reqConfig).then((response)=>{
       this.setState({
         client: response.data
       })
    })
  }

  deleteClient() {
    const clientid = this.props.match.params.clientid
    const idToken = localStorage.getItem('id_token');
    const sub = jwt_decode(idToken).sub;
    var reqConfig = {
      headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
    };
    axios.delete(`${config.identitiesServices.URL}/identities/${sub}/clients/${clientid}`, reqConfig).then((response)=>{
      this.props.history.push(`/manage`)
    })
  }

  rotateClientCredentials() {
    const clientid = this.props.match.params.clientid
    const idToken = localStorage.getItem('id_token');
    const sub = jwt_decode(idToken).sub;
    var reqConfig = {
      headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
    };
    axios.patch(`${config.identitiesServices.URL}/identities/${sub}/clients/${clientid}/secrets`, null, reqConfig).then((response)=>{
      this.setState({
        client: { ...this.state.client, client_secret: response.data.client_secret}
      });
    })
  }


  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="box">
            <div className="subtitle is-4">Client Data</div>
            <div><strong>Name:</strong> {this.state.client.client_name}</div>
            <div><strong>Description:</strong> {this.state.client.client_description}</div>
            <div><strong>Created:</strong> {this.state.client.date_created}</div>
            <div className="button is-danger is-outlined" onClick={() => this.deleteClient() }>Delete Client</div>
          </div>
          <div className="box">
            <div className="subtitle is-4">Credentials</div>
            <div><strong>Client ID:</strong> {this.state.client.client_id}</div>
            <div><strong>Secret:</strong> {this.state.client.client_secret}</div>
            <div className="button is-danger is-outlined" onClick={() => this.rotateClientCredentials() }>Update Credentials</div>
          </div>
          <div className="box">
            <div className="subtitle is-4">API Products</div>
            <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Description</th>
                <th>Rights</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((product) => <tr key={product.productName}>
                    <td>{product.productName}</td>
                    <td>{product.productDescription}</td>
                    <td>{product.productRights.map(right => <div key={right}>{right}</div>)}</td>
                    <td><a className="button is-danger is-outlined is-small" onClick={() => console.log('unsubscribe')}>Unsubscribe</a></td>
                  </tr>)
                }
              </tbody>
            </table>
            <div className="has-text-grey has-text-weight-light">After you unsubscribed you can resubscribe to an api in the api catalog.</div>
          </div>
        </div>
      </section>
    )
  }
}

export default ClientDetails;