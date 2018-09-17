import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NavBar from './NavBar';
import NavBar1 from './NavBar.1';
import logo from '../../containers/App/logo.svg';

storiesOf('NavBar', module)
  .add('authenticated', () => {
    let elements = [
      {
        name: "Home",
        url: "/home"
      },
      {
        name: "Services",
        url: "/service"
      }
    ];
    let rightElements = [
      {
        name: "Manage",
        url: "/manage"
      }
    ]
    let auth = {
      isAuthenticated: true
    }
    return <NavBar logo={logo} width='150' height='25' elements={elements} rightElements={rightElements} auth={auth} />
  })
  .add('unauthenticated', () => {
    let elements = [
      {
        name: "Home",
        url: "/home"
      },
      {
        name: "Services",
        url: "/service"
      },
      {
        name: "Bobshow",
        url: "/bobshow"
      }
    ];
    let auth = {
      isAuthenticated: false
    }
    let rightElements = [
      {
        name: "Manage",
        url: "/manage"
      }
    ]
    return <NavBar logo={logo} width='150' height='25' elements={elements} rightElements={rightElements} auth={auth} />
  })
  .add('no logo', () => {
    let elements = [
      {
        name: "Home",
        url: "/home"
      },
      {
        name: "Services",
        url: "/service"
      },
      {
        name: "Bobshow",
        url: "/bobshow"
      }
    ];
    let auth = {
      isAuthenticated: false
    }
    let rightElements = [
      {
        name: "Manage",
        url: "/manage"
      }
    ]
    return <NavBar width='150' height='25' elements={elements} rightElements={rightElements} auth={auth} />
  })
  .add('authenticated new', () => {
    const elements = ["Products", "Documentation"]
    const defaultSelected = ["Products"]
    return <NavBar1 logo={logo} nav={elements} defaultSelected={defaultSelected} authenticated={true} />;
  })
  .add('unauthenticated new', () => {
    const elements = ["Products", "Documentation"]
    const defaultSelected = ["Products"]
    return <NavBar1 logo={logo} nav={elements} defaultSelected={defaultSelected} authenticated={false} />;
  })
  .add('no logo new', () => {
    const elements = ["Products", "Documentation"]
    const defaultSelected = ["Products"]
    return <NavBar1 nav={elements} defaultSelected={defaultSelected} authenticated={false} />;
  })

