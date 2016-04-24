export function nodesToArray(nodes = []) {
	return [].slice.call(nodes, 0);
}

const eventsNames = [
	'transitionend',
	'webkitTransitionEnd', // Chrome and Safari
	'oTransitionEnd', // Opera 10.5
	'otransitionend' // Opera 12
];

export function onceTransitionEnd(element, callback) {
	eventsNames.forEach(eventName => {
		element.addEventListener(eventName, function handler() {
			element.removeEventListener(eventName, handler);
			callback();
		});
	});
}
