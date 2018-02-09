'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'root': 'Cal__Slider__root',
  'slide': 'Cal__Slider__slide',
  'wrapper': 'Cal__Slider__wrapper',
  'arrow': 'Cal__Slider__arrow',
  'arrowRight': 'Cal__Slider__arrowRight',
  'arrowLeft': 'Cal__Slider__arrowLeft'
};
var transition = {
  'enter': 'Cal__transition__enter',
  'enterActive': 'Cal__transition__enterActive',
  'leave': 'Cal__transition__leave',
  'leaveActive': 'Cal__transition__leaveActive'
};


var DIRECTIONS = {
  LEFT: 0,
  RIGHT: 1
};

var Arrow = function Arrow(_ref) {
  var _classNames;

  var direction = _ref.direction,
      _onClick = _ref.onClick;
  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(styles.arrow, (_classNames = {}, _classNames[styles.arrowLeft] = direction === DIRECTIONS.LEFT, _classNames[styles.arrowRight] = direction === DIRECTIONS.RIGHT, _classNames)),
      onClick: function onClick() {
        return _onClick(direction);
      }
    },
    _react2.default.createElement(
      'svg',
      {
        x: '0px',
        y: '0px',
        viewBox: '0 0 26 46'
      },
      _react2.default.createElement('path', { d: 'M31.232233,34.767767 C32.2085438,35.7440777 33.7914562,35.7440777 34.767767,34.767767 C35.7440777,33.7914562 35.7440777,32.2085438 34.767767,31.232233 L14.767767,11.232233 C13.7914562,10.2559223 12.2085438,10.2559223 11.232233,11.232233 L-8.767767,31.232233 C-9.7440777,32.2085438 -9.7440777,33.7914562 -8.767767,34.767767 C-7.7914562,35.7440777 -6.2085438,35.7440777 -5.232233,34.767767 L12.9997921,16.5357418 L31.232233,34.767767 Z', id: 'Shape', fill: '#FFF', transform: 'translate(13.000000, 23.000000) rotate(90.000000) translate(-13.000000, -23.000000) ' })
    )
  );
};

var Slider = function (_PureComponent) {
  _inherits(Slider, _PureComponent);

  function Slider() {
    var _temp, _this, _ret;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.handleClick = function (direction) {
      var _this$props = _this.props,
          children = _this$props.children,
          index = _this$props.index,
          onChange = _this$props.onChange;


      switch (direction) {
        case DIRECTIONS.LEFT:
          index = Math.max(0, index - 1);
          break;
        case DIRECTIONS.RIGHT:
          index = Math.min(index + 1, children.length);
          break;
        default:
          return;
      }

      onChange(index);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Slider.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        index = _props.index;


    return _react2.default.createElement(
      'div',
      { className: styles.root },
      index !== 0 && _react2.default.createElement(Arrow, { onClick: this.handleClick, direction: DIRECTIONS.LEFT }),
      _react2.default.createElement(
        _CSSTransitionGroup2.default,
        {
          className: styles.wrapper,
          component: 'div',
          style: {
            transform: 'translate3d(-' + 100 * index + '%, 0, 0)'
          },
          transitionName: transition,
          transitionEnterTimeout: 300,
          transitionLeaveTimeout: 300
        },
        _react.Children.map(children, function (child, i) {
          return _react2.default.createElement(
            'div',
            {
              key: i,
              className: styles.slide,
              style: { transform: 'translateX(' + 100 * i + '%)' }
            },
            child
          );
        })
      ),
      index !== children.length - 1 && _react2.default.createElement(Arrow, { onClick: this.handleClick, direction: DIRECTIONS.RIGHT })
    );
  };

  return Slider;
}(_react.PureComponent);

exports.default = Slider;
module.exports = exports['default'];