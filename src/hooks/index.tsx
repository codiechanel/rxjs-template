import { useEffect } from 'react';
export function useClickListener(inputEl, eventListener) {
	// we should pass inputEl
	// not inputEl.current
	// useEffect will run after render...
	// by that time current will have a value
	useEffect(() => {
		console.log('useEffect');
		let element = inputEl.current;
		// let element = document;
		let eventName = 'click';

		const isSupported = element && element.addEventListener;
		if (!isSupported) return;
		// const eventListener = ({ clientX, clientY }) => {
		// 	circle1.cx = clientX;
		// 	circle1.cy = clientY;
		// };
		element.addEventListener('click', eventListener);
		return () => {
			element.removeEventListener(eventName, eventListener);
		};
		// useEventListener("mousemove", handler, inputEl.current);
	});
}
