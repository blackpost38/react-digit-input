'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DigitInput = function (_Component) {
  _inherits(DigitInput, _Component);

  _createClass(DigitInput, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      var stringValue = '' + props.value;
      if (state.initialValue !== stringValue) {
        return {
          initialValue: stringValue,
          value: stringValue
        };
      }

      return null;
    }
  }]);

  function DigitInput(props) {
    _classCallCheck(this, DigitInput);

    var _this = _possibleConstructorReturn(this, (DigitInput.__proto__ || Object.getPrototypeOf(DigitInput)).call(this, props));

    _this.state = {
      initialValue: '' + props.value, // eslint-disable-line react/no-unused-state
      value: '' + props.value
    };

    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(DigitInput, [{
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      var key = event.key,
          value = event.target.value;

      if (key !== 'Backspace' && !/[0-9]/.test(key)) {
        event.preventDefault();
        return;
      }

      var onKeyPress = this.props.onKeyPress;

      if (!onKeyPress) {
        return;
      }

      onKeyPress(event, _extends({}, this.props, { value: value }));
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var value = event.target.value;

      this.setState({ value: value });
      var onChange = this.props.onChange;

      if (!onChange) {
        return;
      }
      onChange(event, _extends({}, this.props, { value: value }));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', _extends({}, this.props, {
        type: 'number',
        pattern: '[0-9]*',
        value: this.state.value,
        onKeyPress: this.handleKeyPress,
        onChange: this.handleChange
      }));
    }
  }]);

  return DigitInput;
}(_react.Component);

DigitInput.propTypes = {
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onChange: _propTypes2.default.func,
  onKeyPress: _propTypes2.default.func
};

DigitInput.defaultProps = {
  value: '',
  onChange: null,
  onKeyPress: null
};

exports.default = DigitInput;