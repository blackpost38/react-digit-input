import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';

class NumberInput extends React.Component {
  constructor(props) {
    super(props);

    const displayValue = this.getDisplayValue();
    this.state = { value: displayValue };

    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onBlur(event) {
    const { onBlur } = this.props;
    const displayValue = this.getDisplayValue(event.target.value);
    this.setState({ value: displayValue }, () => {
      onBlur(displayValue);
    });
  }

  onChange(event) {
    const { onChange } = this.props;
    const { value } = event.target;
    this.setState({ value }, () => {
      onChange(value);
    });
  }

  getDisplayValue(value = this.props.value) {
    const { format } = this.props;
    return numeral(value).format(format);
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onBlur={this.onBlur}
        onChange={this.onChange}
      />
    );
  }
}

NumberInput.propTypes = {
  value: PropTypes.string.isRequired,
  format: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

NumberInput.defaultProps = {
  format: '0,0.0',
  onBlur() {},
  onChange() {},
};

export default NumberInput;
