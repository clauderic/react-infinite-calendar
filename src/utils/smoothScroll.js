var easeInOutQuint = function(time) {
  return 1 - (--time) * time * time * time;
};

// calculate the scroll position we should be in
// given the start and end point of the scroll
// the time elapsed from the beginning of the scroll
// and the total duration of the scroll (default 500ms)
var position = function(start, end, elapsed, duration) {
  if (elapsed > duration) return end;
  return start + (end - start) * easeInOutQuint(elapsed / duration);
};

// we use requestAnimationFrame to be called by the browser before every repaint
// if the first argument is an element then scroll to the top of this element
// if the first argument is numeric then scroll to this location
// if the callback exist, it is called when the scrolling is finished
// if context is set then scroll that element, else scroll window
export default function smoothScroll({element, offsetTop, duration = 600, callback, setState}) {
  var start = element.scrollTop;
  var clock = Date.now();

  var step = () => {
    var elapsed = Date.now() - clock;

    window.requestAnimationFrame(() => setState({
      scrollTop: position(start, offsetTop, elapsed, duration),
    }, elapsed > duration ? callback : step));
  };

  step();
};
