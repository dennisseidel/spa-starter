import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NewsBox from './NewsBox';
import picture from '../../containers/Home/title.png'

storiesOf('NewsBox', module)
  .add('basic', () => {
    const entry = {
      title: "Introducing Poly API",
      summary: "The Poly API enables your application to find and import 3D assets easily and directly from the Poly library. The REST API is available for any platform. If you're building on top of Unity or Unreal Engine make sure to check out the Poly Toolkit, which will make your workflow even more efficient.",
      button: "Learn more",
      picture: picture
    }
    return <NewsBox picture={entry.picture} title={entry.title} summary={entry.summary} button={entry.button} />
  });  