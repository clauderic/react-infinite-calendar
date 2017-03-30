function easing(time) {
  return 1 - (--time) * time * time * time;
};

/**
 * Given a start/end point of a scroll and time elapsed, calculate the scroll position we should be at
 * @param {Number} start - the initial value
 * @param {Number} stop - the final desired value
 * @param {Number} elapsed - the amount of time elapsed since we started animating
 * @param {Number} - duration - the duration of the animation
 * @return {Number} - The value we should use on the next tick
 */
function getValue(start, end, elapsed, duration) {
  if (elapsed > duration) return end;
  return start + (end - start) * easing(elapsed / duration);
};

/**
 * Smoothly animate between two values
 * @param {Number} fromValue - the initial value
 * @param {Function} onUpdate - A function that is called on each tick
 * @param {Function} onComplete - A callback that is fired once the scroll animation ends
 * @param {Number} duration - the desired duration of the scroll animation
 */
export default function animate({
  fromValue,
  toValue,
  onUpdate,
  onComplete,
  duration = 600,
}) {
  const startTime = performance.now();

  const tick = () => {
    const elapsed = performance.now() - startTime;

    window.requestAnimationFrame(() => onUpdate(
      getValue(fromValue, toValue, elapsed, duration),
      // Callback
      elapsed <= duration
        ? tick
        : onComplete
    ));
  };

  tick();
};
