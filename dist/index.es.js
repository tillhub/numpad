import React, { Component } from 'react';
import PropTypes from 'prop-types';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".styles_wrapper__3KXDn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.styles_keypad__1VaAA {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1em;\n  grid-auto-rows: 40px;\n  user-select: none;\n}\n\n.styles_zero__xda8r {\n  grid-column: 1/3;\n}\n\n.styles_back__WKbCm {\n  grid-column: 1/3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.styles_button__3Vugn {\n  background: lightgrey;\n  text-align: center;\n  border-radius: 4px;\n  line-height: 40px;\n  display: table-cell;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.styles_button__3Vugn.styles_disabled__3LiE4 {\n  color: grey;\n  cursor: auto;\n}\n\n.styles_button__3Vugn.styles_back__WKbCm {\n  display: flex;\n}\n\n.styles_disabled__3LiE4 img {\n  opacity: 0.4;\n}\n\n.styles_button__3Vugn:not([disabled]):hover {\n  background-color: rgba(238, 159, 89, 0.5);\n}\n\n.styles_button__3Vugn:not([disabled]):active {\n  background-color: rgb(238, 159, 89);\n  box-shadow: 0 2px #666;\n  transform: translateY(2px);\n}\n\n.styles_inputField__13P6_ {\n  padding: 30px 0;\n  text-align: center;\n  font-size: 80px;\n  border: none;\n  width: 100%;\n  margin-bottom: 30px;\n}\n";
var styles = { "wrapper": "styles_wrapper__3KXDn", "keypad": "styles_keypad__1VaAA", "zero": "styles_zero__xda8r", "back": "styles_back__WKbCm", "button": "styles_button__3Vugn", "disabled": "styles_disabled__3LiE4", "inputField": "styles_inputField__13P6_" };
styleInject(css);

var backspaceIcon = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%20%20%20%20%3Cpath%20d%3D%22M20%2011H7.83l5.59-5.59L12%204l-8%208%208%208%201.41-1.41L7.83%2013H20v-2z%22%2F%3E%3C%2Fsvg%3E";

function Button(_ref) {
  var text = _ref.text,
      clickHandler = _ref.clickHandler,
      klass = _ref.klass,
      children = _ref.children,
      disabled = _ref.disabled;

  function handleClick() {
    if (disabled) return;
    clickHandler(text);
  }

  return React.createElement(
    'span',
    { className: classnames(styles.button, klass, disabled && styles.disabled), disabled: disabled, onClick: handleClick },
    children
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  klass: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired
};

Button.defaultProps = {
  klass: null
};

var buttonValues = ['C', '7', '8', '9', '4', '5', '6', '1', '2', '3'];

function Keypad(_ref) {
  var clickHandler = _ref.clickHandler,
      disabled = _ref.disabled,
      decimalSeparator = _ref.decimalSeparator;

  var buttons = buttonValues.map(function (value) {
    return React.createElement(
      Button,
      { text: value, clickHandler: clickHandler, key: value, disabled: disabled },
      value
    );
  });

  return React.createElement(
    'div',
    { className: styles.keypad },
    React.createElement(
      Button,
      { text: 'back', klass: styles.back, clickHandler: clickHandler, disabled: disabled },
      React.createElement('img', { src: backspaceIcon })
    ),
    buttons,
    React.createElement(
      Button,
      { text: '0', klass: styles.zero, clickHandler: clickHandler, disabled: disabled },
      '0'
    ),
    React.createElement(
      Button,
      { text: decimalSeparator, clickHandler: clickHandler, disabled: disabled },
      decimalSeparator
    )
  );
}

Keypad.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  decimalSeparator: PropTypes.string.isRequired
};

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

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var DEFAULT_WIDTH = '400px';

var NumPad = function (_Component) {
  inherits(NumPad, _Component);

  function NumPad() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, NumPad);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = NumPad.__proto__ || Object.getPrototypeOf(NumPad)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      input: _this.props.startValue || '0'
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
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.startValue !== prevProps.startValue) {
        this.setState({ input: this.props.startValue });
      }
    }
  }, {
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


      return React.createElement(
        'div',
        { className: styles.wrapper, style: { width: width } },
        React.createElement('input', {
          className: classnames(styles.inputField),
          value: input || '0',
          onChange: function onChange(e) {
            return _this2.setDisplayText(e.target.value);
          },
          disabled: disabled || withoutInputField
        }),
        children,
        React.createElement(Keypad, {
          disabled: disabled,
          clickHandler: this.handleKeypadPress,
          decimalSeparator: decimalSeparator
        })
      );
    }
  }]);
  return NumPad;
}(Component);


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
  startValue: null,
  disabled: false,
  withoutInputField: false,
  decimalSeparator: '.',
  width: DEFAULT_WIDTH,
  children: null
};

export default NumPad;
//# sourceMappingURL=index.es.js.map
