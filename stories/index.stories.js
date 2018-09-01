import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import DigitInput from '../index';

storiesOf('DigitInput', module)
  .add('with basic', () => (
    <DigitInput />
  ))
  .add('with initial value', () => {
    class Sample extends Component {
      constructor(props) {
        super(props);
        this.state = { value: 0 };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        this.setState({ value: this.state.value + 1});
      }

      render() {
        return (
          <div>
            <DigitInput value={this.state.value} />
            <button onClick={this.handleClick}>increment</button>
          </div>
        )
      }
    }

    return <Sample />;
  })
