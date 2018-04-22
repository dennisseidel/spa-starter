import React, {Component} from 'react';
import FrontHero from '../../components/FrontHero/FrontHero';
import NewsBox from '../../components/NewsBox/NewsBox';
import Footer from '../../components/Footer/Footer';
import picture from './title.png';

const home = class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let {news} = this.state;
    return (
      <div className="Home">
        <section className="hero is-info is-large">
          <div className="hero-body">
            <div className="container has-text-centered">
              <p className="title">
                open insurance platform
              </p>
            </div>
            <section className="section"></section>
            <section className="section">
            <div className="container has-text-centered">
              <div className="columns is-6">
                <div className="column">
                  <i className="fas fa-plug fa-3x"></i>
                  <p>APIs</p>
                </div>
                <div className="column">
                  <i className="fas fa-id-badge fa-3x"></i>
                  <p>Identity Management</p>
                </div>
                <div className="column">
                  <i className="fas fa-cube fa-3x"></i>  
                  <p>Assets</p>
                </div>
              </div>
            </div>
            </section>
          </div>
          <Footer/>
        </section>
      </div>
    );
  }
}

export default home;