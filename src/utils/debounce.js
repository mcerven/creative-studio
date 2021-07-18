// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
export default function debounce(func, wait, immediate = false) {
	let timeout;

	return function() {
		const context = this;
    const args = arguments;

		const callback = function() {
			timeout = null;
			if (!immediate)
        func.apply(context, args);
		}

		const callNow = immediate && !timeout;

		clearTimeout(timeout);
		timeout = setTimeout(callback, wait);

		if (callNow)
      func.apply(context, args);
	}
}
