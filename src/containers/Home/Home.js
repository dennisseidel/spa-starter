// this will be the home view - use redux / use always a complete layout on a page
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, List, Row, Col, Button, Icon } from 'antd';
import './Home.css';
import NavBar from '../../components/NavBar/NavBar.1';
import logo from '../App/logo.svg';
// import Action Creator
import { login, logout, checkLogin } from '../../redux/users';
import { loadProducts } from '../../redux/products';

const { Footer, Content } = Layout;

const page = class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: ["Products", "Documentation"],
      defaultSelected: ["Products"]
    };
  }

  render() {
    return (

      <Layout className="layout">
        <NavBar nav={this.state.elements} defaultSelected={this.state.defaultSelected} authenticated={true} logo={logo} />
        <Content>
          <Row>  
            <div className="banner" style={{ background: '#fff', padding: 100, minHeight: 280 }}>
              <h1 style={{ textAlign: 'center' }}>On this <b>Open Industry Cloud Platform</b>, reuse best in class <b>business functionality</b> developed in 1000s of hours with a <b>single api call</b>.</h1>
              <div className="urgent-call-to-action" style={{ textAlign: 'center' }}>
                <Button type="primary" icon="double-right" size="large" ghost>Limited beta invites available.</Button>
              </div>
            </div>
          </Row>
          <Row gutter={16} style={{ padding: '0 30px' }}>
            <div className="sectiontitle">Products and Services</div>
            <Col span={12}>
              <List
                header={<div><h2><Icon type="api"/> APIs</h2></div>}
                bordered
                dataSource={this.state.apis}
                renderItem={item => (<List.Item>{item}</List.Item>)}
                style={{ background: '#fff' }}
              />
            </Col>
            <Col span={12} >
              <List
                header={<div><h1><Icon type="block"/> Services</h1></div>}
                bordered
                dataSource={this.state.services}
                renderItem={item => (<List.Item>{item}</List.Item>)}
                style={{ background: '#fff'}}
              />
            </Col>
          </Row>
            
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Zealous © 2018
        </Footer>
      </Layout>
    )
  };
}

// maps redux state to local props
const mapStateToProps = reduxState => {
  return {
    // userinfo including auth state
    user: reduxState.user, 
    // extract the apis from products
    services: reduxState.products, // might be a function
    // services the services form products
    platform: reduxState.products // might be a function
  }
}

// injects a callback into props to dispatch an action from an action creator
const mapDispatchToProps = dispatch => {
  return {
    onLoginClick: () => {
      dispatch(login())
    },
    onLogoutClick: () => {
      dispatch(logout())
    },
    checkLogin: () => {
      dispatch(checkLogin())
    },
    loadProducts: () => {
      dispatch(loadProducts())
    }
  }
}

const home = connect(
  mapStateToProps,
  mapDispatchToProps
)(page)

export default home;