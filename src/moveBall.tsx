import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { duration } from './rxjs-web-animation';
import { tween } from './rxjs-web-animation';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { useEffect, useRef, useState } from 'react';
// import { useSpring, animated } from 'react-spring';
import { easeInSine } from './rxjs-web-animation';
import { CircleObj, Circle } from './Circle';
import { duration, distance } from './anim-lib';
import { elasticOut, elastic } from './eases';
import { map, takeWhile, tap } from 'rxjs/operators';
import { useClickListener, useMySpring, computeValue } from './hooks';
// this one will return a function

// we could pass in a class
// no problem

// could use from to syntax plus optional duration which default to 1000
function moveBall(duration1, distance1, obj, prop, origVal) {
	let duration$ = duration(duration1);
	let distance$ = distance(distance1);
	let elastic$ = elastic(2);
	duration$
		.pipe(
			// map(elastic$),
			map(elasticOut),
			// map(linear),
			// map(distance$(distanceVal)),
			map(distance$),
			tap(
				frame => {
					// console.log(frame);
					obj[prop] = origVal + frame;
					// circle1.cx = frame;
				},
				err => console.log(` error:`, err),
				() => {
					// make sure we get exact
					obj[prop] = origVal + distance1;
					console.log('Animated', 'completed');
				}
			)
		)
		.subscribe();
}

export function App(props) {
	let circle1 = new CircleObj(100, 180, 50);
	circle1.fill = 'orange';
	circle1.opacity = 1;
	// console.log(Object.keys(circle1));
	const inputEl = useRef(null);
	const eventListener = ({ clientX, clientY }) => {
		// circle1.cx = clientX;

		let xFrameTotal = 0;
		let xdist = clientX - circle1.cx;
		let origx = circle1.cx;
		let origY = circle1.cy;

		// console.log('xdist', xdist);
		//  we should call when its truly finished
		// otherwise we get crazy animations...
		// interpolate(1000, xdist, circle1, 'cx', origx);
		// interpolate(1000, clientY - circle1.cy, circle1, 'cy', origY);
		// interpolate(2000, 1, circle1, 'opacity', 0);
		// circle1.opacity = 0;
		// interpolateAll(circle1, { cx: clientX, cy: clientY, opacity: 1 }, 2000);

		// moveBall(2000, xdist, frame => {
		// 	// console.log(frame);
		// 	xFrameTotal += frame;
		// 	circle1.cx = origx + frame;
		// });
		// moveBall(2000, clientY - 	circle1.cy, frame => {
		// 	// console.log('hmm');
		// 	circle1.cy =  origY + frame;;
		// });

		// circle1.cy = clientY;
	};
	// useClickListener(inputEl, eventListener);

	// let prop2 = useMySpring({
	// 	from: circle1,
	// 	to: { cx: 300, cy: 300, opacity: 1 }
	// });

	// circle1.cx = prop2['cx'];

	// circle1.cy = prop2['cy'];
	// console.log('render', prop2);

	// console.log(props.children);

	return (
		<div id="thediv" style={{ padding: 0 }}>
			<svg width="800" height="400" fill="#688" ref={inputEl}>
				<Circle circleObj={circle1} />
			</svg>

			<button onClick={() => {}}>cools nixwe hmm</button>
		</div>
	);
}
// ReactDOM.render(
// 	<App />,
// 	document.getElementById('root')
// 	// <Hello compiler="TypeScript" framework="React" />,
// 	// document.getElementById("root")
// );
