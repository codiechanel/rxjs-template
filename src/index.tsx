import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { duration } from './rxjs-web-animation';
import { tween } from './rxjs-web-animation';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { useEffect, useRef } from 'react';
// import { useSpring, animated } from 'react-spring';
import { easeInSine } from './rxjs-web-animation';
import { CircleObj, Circle } from './Circle';
import { duration, distance } from './anim-lib';
import { map, takeWhile, tap } from 'rxjs/operators';
import { useClickListener } from './hooks';
// this one will return a function
const elastic = (bounciness: number = 1) => {
	const p = bounciness * Math.PI;
	return t => 1 - Math.pow(Math.cos((t * Math.PI) / 2), 3) * Math.cos(t * p);
};

const linear = t => {
	return t;
};

const elasticOut = t => {
	return (
		Math.sin((-13.0 * (t + 1.0) * Math.PI) / 2) * Math.pow(2.0, -10.0 * t) + 1.0
	);
};

function moveBall(duration1, distance1, obj, prop, origVal) {
	let duration$ = duration(duration1);
	let distance$ = distance(distance1);
	let elastic$ = elastic(2);
	duration$
		.pipe(
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

function App(props) {
	let circle1 = new CircleObj(100, 180, 50);
	circle1.fill = '#567';
	const inputEl = useRef(null);
	const eventListener = ({ clientX, clientY }) => {
		// circle1.cx = clientX;

		let xFrameTotal = 0;
		let xdist = clientX - circle1.cx;
		let origx = circle1.cx;
		let origY = circle1.cy;
		console.log('xdist', xdist);
		moveBall(1000, xdist, circle1, 'cx', origx);
		moveBall(1000, clientY - circle1.cy, circle1, 'cy', origY);
		// moveBall(2000,xdist , frame => {
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
	useClickListener(inputEl, eventListener);
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
ReactDOM.render(
	<App />,
	document.getElementById('root')
	// <Hello compiler="TypeScript" framework="React" />,
	// document.getElementById("root")
);
