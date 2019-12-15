import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
export const Circle = observer(props => {
	// console.log('observer');
	let { cx, cy, r, fill } = props.circleObj;
	return (
		<circle
			// transform={`translate(${cx} ${cy})`}
			cx={cx}
			cy={cy}
			r={r}
			fill={fill}
			onClick={() => console.log('aa')}
		/>
	);
});

export class CircleObj {
	@observable cx = 0;
	@observable cy = 0;
	@observable r = 0;
	@observable fill;
	constructor(cx, cy, r) {
		this.cx = cx;
		this.cy = cy;
		this.r = r;
	}
}
