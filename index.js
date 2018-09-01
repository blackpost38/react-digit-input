import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DigitInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialValue: `${props.value}`,
      value: `${props.value}`,
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const stringValue = `${props.value}`;
    if (state.initialValue !== stringValue) {
      return {
        initialValue: stringValue,
        value: stringValue,
      };
    }

    return null;
  }

  handleKeyPress(event) {
    const key = event.key;
    if (key !== 'Backspace' && !(/[0-9]/.test(key)) ) {
      event.preventDefault();
      return;
    }
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ value });
  }

  render() {
    return (
      <input
        type="number"
        pattern="[0-9]*"
        value={this.state.value}
        onKeyPress={this.handleKeyPress}
        onChange={this.handleChange}
      />
    );
  }
}

DigitInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DigitInput.defaultProps = {
  value: '',
};

export default DigitInput;
