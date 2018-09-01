import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import DigitInput from '../index';

storiesOf('DigitInput', module)
  .add('with basic', () => (
    <DigitInput />
  ))
  .add('with initial value', () => {
    // eslint-disable-next-line react/no-multi-comp
    class Sample extends Component {
      constructor(props) {
        super(props);
        this.state = { value: 0 };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        this.setState({ value: this.state.value + 1 });
      }

      render() {
        return (
          <div>
            <DigitInput value={this.state.value} />
            <button onClick={this.handleClick}>increment</button>
          </div>
        );
      }
    }

    return <Sample />;
  })
  .add('with event', () => {
    // eslint-disable-next-line react/no-multi-comp
    class Sample extends Component {
      constructor(props) {
        super(props);
        this.state = { value: 0 };
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(e, { value }) {
        this.setState({ value });
      }

      render() {
        return (
          <DigitInput
            value={this.state.value}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        );
      }
    }

    return <Sample />;
  });
