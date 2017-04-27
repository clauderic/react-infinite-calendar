var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { emptyFn } from '../utils';
import defaultSelectionRenderer from './defaultSelectionRenderer';
import classNames from 'classnames';
var styles = {
  'root': 'Cal__Header__root',
  'landscape': 'Cal__Header__landscape',
  'dateWrapper': 'Cal__Header__dateWrapper',
  'day': 'Cal__Header__day',
  'wrapper': 'Cal__Header__wrapper',
  'blank': 'Cal__Header__blank',
  'active': 'Cal__Header__active',
  'year': 'Cal__Header__year',
  'date': 'Cal__Header__date',
  'range': 'Cal__Header__range'
};
var Header = (_temp = _class = function (_PureComponent) {
  _inherits(Header, _PureComponent);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  Header.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        layout = _props.layout,
        blank = _props.locale.blank,
        selected = _props.selected,
        renderSelection = _props.renderSelection,
        theme = _props.theme;


    return React.createElement(
      'div',
      {
        className: classNames(styles.root, (_classNames = {}, _classNames[styles.landscape] = layout === 'landscape', _classNames)),
        style: {
          backgroundColor: theme.headerColor,
          color: theme.textColor.active
        }
      },
      selected && renderSelection(selected, this.props) || React.createElement(
        'div',
        { className: classNames(styles.wrapper, styles.blank) },
        blank
      )
    );
  };

  return Header;
}(PureComponent), _class.defaultProps = {
  onYearClick: emptyFn,
  renderSelection: defaultSelectionRenderer
}, _temp);
export { Header as default };
process.env.NODE_ENV !== "production" ? Header.propTypes = {
  dateFormat: PropTypes.string,
  display: PropTypes.string,
  layout: PropTypes.string,
  locale: PropTypes.object,
  onYearClick: PropTypes.func,
  selected: PropTypes.any,
  shouldAnimate: PropTypes.bool,
  theme: PropTypes.object
} : void 0;