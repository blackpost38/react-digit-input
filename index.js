import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DigitInput extends Component {
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

  constructor(props) {
    super(props);

    this.state = {
      initialValue: `${props.value}`, // eslint-disable-line react/no-unused-state
      value: `${props.value}`,
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyPress(event) {
    const { key, target: { value } } = event;
    if (key !== 'Backspace' && !(/[0-9]/.test(key))) {
      event.preventDefault();
      return;
    }

    const { onKeyPress } = this.props;
    if (!onKeyPress) {
      return;
    }

    onKeyPress(event, { ...this.props, value });
  }

  handleChange(event) {
    const { target: { value } } = event;
    this.setState({ value });
    const { onChange } = this.props;
    if (!onChange) {
      return;
    }
    onChange(event, { ...this.props, value });
  }

  render() {
    return (
      <input
        {...this.props}
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
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
};

DigitInput.defaultProps = {
  value: '',
  onChange: null,
  onKeyPress: null,
};

export default DigitInput;
