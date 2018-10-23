'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var styled = _interopDefault(require('styled-components'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n  background: lightgrey;\n  text-align: center;\n  border-radius: 4px;\n  line-height: 40px;\n  display: table-cell;\n  vertical-align: middle;\n  cursor: pointer;\n  ', ';\n'], ['\n  background: lightgrey;\n  text-align: center;\n  border-radius: 4px;\n  line-height: 40px;\n  display: table-cell;\n  vertical-align: middle;\n  cursor: pointer;\n  ', ';\n']);

var ButtonDisabled = '\n  color: grey;\n  cursor: auto;\n  img {\n    opacity: 0.4;\n  }\n';
var ButtonActive = '\n  &:hover {\n    background-color: rgba(238, 159, 89, 0.5);\n  }\n  &:active {\n    background-color: rgb(238, 159, 89);\n    box-shadow: 0 2px #666;\n    transform: translateY(2px);\n  }\n';
var StyledButton = styled.span(_templateObject, function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? ButtonDisabled : ButtonActive;
});

function Button(_ref2) {
  var text = _ref2.text,
      clickHandler = _ref2.clickHandler,
      className = _ref2.className,
      children = _ref2.children,
      disabled = _ref2.disabled,
      rest = objectWithoutProperties(_ref2, ['text', 'clickHandler', 'className', 'children', 'disabled']);

  function handleClick() {
    if (disabled) return;
    clickHandler(text);
  }

  return React__default.createElement(
    StyledButton,
    _extends({
      className: className,
      disabled: disabled,
      onClick: handleClick
    }, rest),
    children
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired
};

Button.defaultProps = {
  className: null
};

var backspaceIcon = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%20%20%20%20%3Cpath%20d%3D%22M20%2011H7.83l5.59-5.59L12%204l-8%208%208%208%201.41-1.41L7.83%2013H20v-2z%22%2F%3E%3C%2Fsvg%3E";

var buttonValues = ['C', '7', '8', '9', '4', '5', '6', '1', '2', '3'];

function Buttons(_ref) {
  var clickHandler = _ref.clickHandler,
      disabled = _ref.disabled;

  return buttonValues.map(function (value) {
    return React__default.createElement(
      Button,
      {
        text: value,
        clickHandler: clickHandler,
        key: value,
        disabled: disabled
      },
      value
    );
  });
}

Buttons.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

var _templateObject$1 = taggedTemplateLiteral(['\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1em;\n  grid-auto-rows: 40px;\n  user-select: none;\n'], ['\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1em;\n  grid-auto-rows: 40px;\n  user-select: none;\n']),
    _templateObject2 = taggedTemplateLiteral(['\n  grid-column: 1/3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'], ['\n  grid-column: 1/3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n']),
    _templateObject3 = taggedTemplateLiteral(['\n  grid-column: 1/3;\n'], ['\n  grid-column: 1/3;\n']);

var StyledKeypad = styled.div(_templateObject$1);

var StyledBackButton = styled(Button)(_templateObject2);

var StyledZeroButton = styled(Button)(_templateObject3);

function Keypad(_ref) {
  var clickHandler = _ref.clickHandler,
      disabled = _ref.disabled,
      decimalSeparator = _ref.decimalSeparator;

  return React__default.createElement(
    StyledKeypad,
    null,
    React__default.createElement(
      StyledBackButton,
      {
        text: 'back',
        clickHandler: clickHandler,
        disabled: disabled,
        'data-testid': 'backspace'
      },
      React__default.createElement('img', { src: backspaceIcon })
    ),
    React__default.createElement(Buttons, { clickHandler: clickHandler, disabled: disabled }),
    React__default.createElement(
      StyledZeroButton,
      {
        text: '0',
        clickHandler: clickHandler,
        disabled: disabled
      },
      '0'
    ),
    React__default.createElement(
      Button,
      {
        text: decimalSeparator,
        clickHandler: clickHandler,
        disabled: disabled,
        'data-testid': 'decimalSeparator'
      },
      decimalSeparator
    )
  );
}

Keypad.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  decimalSeparator: PropTypes.string.isRequired
};

var _templateObject$2 = taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: ', ';\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: ', ';\n']),
    _templateObject2$1 = taggedTemplateLiteral(['\n  padding: 30px 0;\n  text-align: center;\n  font-size: 80px;\n  border: none;\n  width: 100%;\n  margin-bottom: 30px;\n'], ['\n  padding: 30px 0;\n  text-align: center;\n  font-size: 80px;\n  border: none;\n  width: 100%;\n  margin-bottom: 30px;\n']);

var StyledWrapper = styled.div(_templateObject$2, function (_ref) {
  var width = _ref.width;
  return width;
});

var StyledInput = styled.input(_templateObject2$1);

var DEFAULT_WIDTH = '400px';

var NumPad = function (_Component) {
  inherits(NumPad, _Component);

  function NumPad() {
    var _ref2;

    var _temp, _this, _ret;

    classCallCheck(this, NumPad);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref2 = NumPad.__proto__ || Object.getPrototypeOf(NumPad)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      input: _this.props.startValue
    }, _this.setDisplayText = function (text) {
      var displayText = _this.removeLeadingZero(text);

      if (!_this.validate(displayText)) return null;

      return _this.setState({ input: displayText }, function () {
        _this.props.handleChange(_this.state.input);
      });
    }, _this.handleKeypadPress = function (key) {
      var input = _this.state.input;


      var text = void 0;

      if (key === 'back') {
        text = _this.removeLastCharacter(input && input.toString());
      } else if (key === 'C') {
        text = '0';
      } else {
        text = input ? '' + input.toString() + key : key;
      }

      _this.setDisplayText(text);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(NumPad, [{
    key: 'validate',
    value: function validate(string) {
      if (string === '') return true;

      // regex matches single 0, single minus,
      // positive/negative decimal numbers (up to 2 digits after separator),
      // empty string
      var regex = void 0;
      if (this.props.decimalSeparator === ',') {
        regex = /^$|^-?(0|[1-9][0-9]*)(,?|,[0-9][0-9]?)$|^-$/g;
      } else {
        regex = /^$|^-?(0|[1-9][0-9]*)(\.?|\.[0-9][0-9]?)$|^-$/g;
      }

      return regex.test(string);
    }
  }, {
    key: 'removeLeadingZero',
    value: function removeLeadingZero(string) {
      if (!string) return '';
      return string.replace(/^0(?=[0-9-])/g, '');
    }
  }, {
    key: 'removeLastCharacter',
    value: function removeLastCharacter(str) {
      if (!str) return str;
      return str.trim().slice(0, -1);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          disabled = _props.disabled,
          withoutInputField = _props.withoutInputField,
          decimalSeparator = _props.decimalSeparator,
          width = _props.width,
          children = _props.children;
      var input = this.state.input;


      return React__default.createElement(
        StyledWrapper,
        { width: width },
        React__default.createElement(StyledInput, {
          'data-testid': 'input',
          value: input || '0',
          onChange: function onChange(e) {
            return _this2.setDisplayText(e.target.value);
          },
          disabled: disabled || withoutInputField
        }),
        children,
        React__default.createElement(Keypad, {
          disabled: disabled,
          clickHandler: this.handleKeypadPress,
          decimalSeparator: decimalSeparator
        })
      );
    }
  }]);
  return NumPad;
}(React.Component);


NumPad.propTypes = {
  handleChange: PropTypes.func,
  startValue: PropTypes.string,
  disabled: PropTypes.bool,
  withoutInputField: PropTypes.bool,
  decimalSeparator: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.node
};

NumPad.defaultProps = {
  handleChange: function handleChange() {},
  startValue: '0',
  disabled: false,
  withoutInputField: false,
  decimalSeparator: '.',
  width: DEFAULT_WIDTH,
  children: null
};

module.exports = NumPad;
//# sourceMappingURL=index.cjs.js.map
