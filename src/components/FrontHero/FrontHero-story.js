import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FrontHero from './FrontHero';

// color overview: https://bulma.io/documentation/overview/colors/

storiesOf('FrontHero', module)
  .add('primary', () => {
    return <FrontHero bgColor="primary" title={<div>Build <b>anything</b> with zealous</div>}/>
  })
  .add('white', () => {
    return <FrontHero bgColor="light" title="Products Index" alignTitle="has-text-centered"/>
  });
