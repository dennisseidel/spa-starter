import auth0 from 'auth0-js';
import config from '../../config';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const auth = class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'd10l.eu.auth0.com',
    clientID: '94YJaDlR5QDpaS7Em6aC02_gj6kA1Q_G',
    redirectUri: config.identitiesServices.CALLBACK_URL,
    audience: 'https://api.d10l.de',
    responseType: 'token id_token',
    scope: 'openid profile https://api.d10l.de/identities:read https://api.d10l.de/identities:write'
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  setProfile(profile) {
    if (!('developer_id' in profile)) {
      var reqConfig = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
      console.log(reqConfig)
      console.log(profile.identity_id)
      axios.post(`${config.identitiesServices.URL}/identities/${profile.identity_id}/developerid`, reqConfig).then((response)=>{
        localStorage.setItem('developer_id', response.data.developer_id);
      })
    } else {
      localStorage.setItem('developer_id', profile.developer_id);
    }
  }

  getProfile = (accessToken, idToken) => {
    var reqConfig = {
      headers: {'Authorization': "Bearer " + accessToken}
    };
    const sub = jwt_decode(idToken).sub;
    console.log(sub)
    axios.get(`${config.identitiesServices.URL}/identities/${sub}`, reqConfig).then((response)=>{
      console.log(response)
      this.setProfile(response.data);
    })
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        //history.replace('/home');
        this.getProfile(authResult.accessToken, authResult.idToken);
      } else if (err) {
        //history.replace('/home');
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    //history.replace('/home');
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    //history.replace('/home');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  login() {
    this.auth0.authorize();
  }
}

export default auth;