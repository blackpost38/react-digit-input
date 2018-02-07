import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import NumberInput from '../index';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>);

storiesOf('NumberInput', module)
  .add('with basic', () => (
    <NumberInput
      value="12.2"
      format="0000,0.00"
      onBlur={(value) => {
        console.log('value', value);
      }}
      onChange={(value) => {
        console.log('value', value);
      }}
    />
  ));
