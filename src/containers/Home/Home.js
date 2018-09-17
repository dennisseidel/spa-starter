// this will be the home view - use redux / use always a complete layout on a page
import React, { Component } from 'react';
import { Layout, List, Row, Col, Button, Icon } from 'antd';
import './Home.css';
import NavBar from '../../components/NavBar/NavBar.1';
import logo from '../App/logo.svg';


const { Footer, Content } = Layout;

const home = class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: ["Products", "Documentation"],
      defaultSelected: ["Products"],
      apis: [
        'Product Info.',
        'Risk Asessment.',
        'Adress Check.',
        'Invenstment.',
      ],
      services: [ 
        'Identity Access Management',
        'API Development',
        'API Management',
        'AI Development'
      ]
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

export default home;