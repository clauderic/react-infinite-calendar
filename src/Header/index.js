import React, {PureComponent, PropTypes} from 'react';
import defaultSelectionRenderer from './defaultSelectionRenderer';
import classNames from 'classnames';
import styles from './Header.scss';

export default class Header extends PureComponent {
  static defaultProps = {
    renderSelection: defaultSelectionRenderer,
  };
  static propTypes = {
    display: PropTypes.string,
    layout: PropTypes.string,
    locale: PropTypes.object,
    onClick: PropTypes.func,
    selected: PropTypes.any,
    shouldAnimate: PropTypes.bool,
    theme: PropTypes.object,
  };
  render() {
    let {
      layout,
      locale: {blank},
      selected,
      renderSelection,
      theme,
    } = this.props;

    return (
      <div
        className={classNames(styles.root, {
          [styles.landscape]: layout === 'landscape',
        })}
        style={{
          backgroundColor: theme.headerColor,
          color: theme.textColor.active,
        }}
      >
        {
          renderSelection(selected, this.props) ||
          <div className={classNames(styles.wrapper, styles.blank)}>{blank}</div>
        }
      </div>
    );
  }
}
