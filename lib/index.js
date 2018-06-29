'use strict';

exports.__esModule = true;
exports.default = exports.EVENT_TYPE = exports.withRange = exports.defaultMultipleDateInterpolation = exports.withMultipleDates = exports.withKeyboardSupport = exports.withDateSelection = exports.Calendar = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

var _Calendar = require('./Calendar');

Object.defineProperty(exports, 'Calendar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Calendar).default;
  }
});

var _withDateSelection = require('./Calendar/withDateSelection');

Object.defineProperty(exports, 'withDateSelection', {
  enumerable: true,
  get: function get() {
    return _withDateSelection.withDateSelection;
  }
});

var _withKeyboardSupport = require('./Calendar/withKeyboardSupport');

Object.defineProperty(exports, 'withKeyboardSupport', {
  enumerable: true,
  get: function get() {
    return _withKeyboardSupport.withKeyboardSupport;
  }
});

var _withMultipleDates = require('./Calendar/withMultipleDates');

Object.defineProperty(exports, 'withMultipleDates', {
  enumerable: true,
  get: function get() {
    return _withMultipleDates.withMultipleDates;
  }
});
Object.defineProperty(exports, 'defaultMultipleDateInterpolation', {
  enumerable: true,
  get: function get() {
    return _withMultipleDates.defaultMultipleDateInterpolation;
  }
});

var _withRange = require('./Calendar/withRange');

Object.defineProperty(exports, 'withRange', {
  enumerable: true,
  get: function get() {
    return _withRange.withRange;
  }
});
Object.defineProperty(exports, 'EVENT_TYPE', {
  enumerable: true,
  get: function get() {
    return _withRange.EVENT_TYPE;
  }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Calendar2 = _interopRequireDefault(_Calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * By default, Calendar is a controlled component.
 * Export a sensible default for minimal setup
 */
var DefaultCalendar = (_temp2 = _class = function (_Component) {
  _inherits(DefaultCalendar, _Component);

  function DefaultCalendar() {
    var _temp, _this, _ret;

    _classCallCheck(this, DefaultCalendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      selected: typeof _this.props.selected !== 'undefined' ? _this.props.selected : new Date()
    }, _this.handleSelect = function (selected) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          interpolateSelection = _this$props.interpolateSelection;


      if (typeof onSelect === 'function') {
        onSelect(selected);
      }

      _this.setState({ selected: interpolateSelection(selected, _this.state.selected) });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  DefaultCalendar.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var selected = _ref.selected;

    if (selected !== this.props.selected) {
      this.setState({ selected: selected });
    }
  };

  DefaultCalendar.prototype.render = function render() {
    // eslint-disable-next-line no-unused-vars
    var _props = this.props,
        Component = _props.Component,
        interpolateSelection = _props.interpolateSelection,
        props = _objectWithoutProperties(_props, ['Component', 'interpolateSelection']);

    return _react2.default.createElement(Component, _extends({}, props, {
      onSelect: this.handleSelect,
      selected: this.state.selected
    }));
  };

  return DefaultCalendar;
}(_react.Component), _class.defaultProps = {
  Component: (0, _withDateSelection.withDateSelection)(_Calendar2.default),
  interpolateSelection: function interpolateSelection(selected) {
    return selected;
  }
}, _temp2);
exports.default = DefaultCalendar;