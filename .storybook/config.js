import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import 'bulma/css/bulma.css';


function loadStories() {
  // https://www.npmjs.com/package/require-context
  const req = require.context('../src/', true, /\-story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);