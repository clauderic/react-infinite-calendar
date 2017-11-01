'use strict';

exports.__esModule = true;

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cancelScrollEvent = function cancelScrollEvent(e) {
  e.stopImmediatePropagation();
  e.preventDefault();
  e.returnValue = false;
  return false;
};

/**
 * Scroll Lock HOC
 * Stops the propagation of wheel events to parent elements when reaching
 * the top or bottom of the content
 * @param {React.Component} WrappedComponent
 */
var withScrollLock = function withScrollLock(WrappedComponent) {
  return function (_WrappedComponent) {
    _inherits(_class2, _WrappedComponent);

    function _class2() {
      var _temp, _this, _ret;

      _classCallCheck(this, _class2);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _WrappedComponent.call.apply(_WrappedComponent, [this].concat(args))), _this), _this.onScrollHandler = function (e) {
        var _this$scrollElem = _this.scrollElem,
            scrollTop = _this$scrollElem.scrollTop,
            scrollHeight = _this$scrollElem.scrollHeight,
            clientHeight = _this$scrollElem.clientHeight;

        var wheelDelta = e.deltaY;
        var isDeltaPositive = wheelDelta > 0;
        var haveReachedBottom = wheelDelta > scrollHeight - clientHeight - scrollTop;
        var haveReachedTop = -wheelDelta > scrollTop;

        if (isDeltaPositive && haveReachedBottom) {
          _this.scrollElem.scrollTop = scrollHeight;
          return cancelScrollEvent(e);
        } else if (!isDeltaPositive && haveReachedTop) {
          _this.scrollElem.scrollTop = 0;
          return cancelScrollEvent(e);
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _class2.prototype.componentDidMount = function componentDidMount() {
      if (_WrappedComponent.prototype.componentDidMount) _WrappedComponent.prototype.componentDidMount.call(this);

      this.scrollElem = _reactDom2.default.findDOMNode(this);
      this.scrollElem.addEventListener('wheel', this.onScrollHandler, false);
    };

    _class2.prototype.componentWillUnmount = function componentWillUnmount() {
      if (_WrappedComponent.prototype.componentWillUnmount) _WrappedComponent.prototype.componentWillUnmount.call(this);

      this.scrollElem.removeEventListener('wheel', this.onScrollHandler, false);
    };

    _class2.prototype.render = function render() {
      return _WrappedComponent.prototype.render.call(this);
    };

    return _class2;
  }(WrappedComponent);
};

exports.default = withScrollLock;
module.exports = exports['default'];