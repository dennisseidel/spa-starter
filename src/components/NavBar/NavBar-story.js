import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NavBar from './NavBar';
import logo from '../../containers/App/cloud-logo.png';

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
    return <NavBar logo={logo} width='75' height='25' elements={elements} isAuthenticated={true} />
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
    return <NavBar logo={logo} width='75' height='25' elements={elements} isAuthenticated={false} />
  });  