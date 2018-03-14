import React from 'react'

class ClientDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clients: [
        {
          "client_description": "",
          "client_id": "",
          "client_name": "",
          "date_created": ""
        }
      ],
      registerApp: false,
      registerAppForm: {
        name: '',
        description: '',
        redirectUrl: '',
        logoutUrl: ''
      }
    }
  }

  componentDidMount() {
    const idToken = localStorage.getItem('id_token');
    const sub = jwt_decode(idToken).sub;
    axios.get(`${config.identitiesServices.URL}/identities/${sub}/clients/`).then((response)=>{
      this.setState({
        clients: response.data.clients
      })
    })
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">App 1</h1>
          <hr />
        </div>
        <div className="container">

        </div>
      </section>
    )
  }
}

export default Dashboard;