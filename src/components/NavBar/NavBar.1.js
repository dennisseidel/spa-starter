import React from 'react'; 
import { Menu, Layout, Button } from 'antd';
import './NavBar.1.css';

const { Header } = Layout;

const navbar = (props) => {
  return (
        <Header className="header-light">
                {
                  props.logo ? <img className="logo" src={props.logo} alt="logo" /> : ''
                }
                <div className="right">
                <Menu
                  theme="light"
                  mode="horizontal"
                  defaultSelectedKeys={props.defaultSelected}
                  style={{ lineHeight: '64px'}}
                  id="nav" key="nav"
                >
                  {
                    props.nav.map((element) => (
                      <Menu.Item key={element}>{element}</Menu.Item>
                    ))
                  }
                  <Button type={props.authenticated ? "primary" : "default" } shape="circle" icon={props.authenticated ? "logout" : "login"}  />
                </Menu>
                </div>
        </Header>
  );
}

export default navbar;