import ReactDOM from 'react-dom';

const cancelScrollEvent = (e) => {
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
const withScrollLock = (WrappedComponent) =>
  class extends WrappedComponent {
    componentDidMount() {
      if (super.componentDidMount) super.componentDidMount();

      this.scrollElem = ReactDOM.findDOMNode(this);
      this.scrollElem.addEventListener('wheel', this.onScrollHandler, false);
    }

    componentWillUnmount() {
      if (super.componentWillUnmount) super.componentWillUnmount();

      this.scrollElem.removeEventListener('wheel', this.onScrollHandler, false);
    }

    onScrollHandler = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = this.scrollElem;
      const wheelDelta = e.deltaY;
      const isDeltaPositive = wheelDelta > 0;
      const haveReachedBottom = wheelDelta > scrollHeight - clientHeight - scrollTop;
      const haveReachedTop = -wheelDelta > scrollTop;

      if (isDeltaPositive && haveReachedBottom) {
        this.scrollElem.scrollTop = scrollHeight;
        return cancelScrollEvent(e);
      } else if (!isDeltaPositive && haveReachedTop) {
        this.scrollElem.scrollTop = 0;
        return cancelScrollEvent(e);
      }
    }

    render() {
      return super.render();
    }
  };

export default withScrollLock;
