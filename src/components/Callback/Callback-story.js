import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Callback from './Callback';

storiesOf('Callback', module)
  .add('loading', () => {
    return <Callback />
  });  