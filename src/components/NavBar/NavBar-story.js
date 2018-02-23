import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NavBar from './NavBar';
import logo from '../../containers/App/ecosphere-logo.svg';

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
  });  