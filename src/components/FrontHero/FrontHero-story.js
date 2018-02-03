import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FrontHero from './FrontHero';

storiesOf('FrontHero', module)
  .add('basic', () => {
    return <FrontHero />
  });  