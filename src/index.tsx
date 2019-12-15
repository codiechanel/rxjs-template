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
import { duration, distance$ } from './anim-lib';
import { map, takeWhile, tap } from 'rxjs/operators';

const elastic = (bounciness: number = 1) => {
	const p = bounciness * Math.PI;
	return t => 1 - Math.pow(Math.cos((t * Math.PI) / 2), 3) * Math.cos(t * p);
};

function App(props) {
	let circle1 = new CircleObj(100, 180, 50);
	circle1.fill = '#567';
	const inputEl = useRef(null);
	// console.log(props.children);
	let duration$ = duration(2000);
	let easing = elastic();
	duration$
		.pipe(
			map(easing),
			// map(distance$(distanceVal)),
			map(distance$(300)),
			tap(
				frame => {
					// console.log(frame);
					circle1.cx = frame;
				},
				err => console.log(` error:`, err),
				() => {
					console.log('Animated', 'completed');
				}
			)
		)
		.subscribe();

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
