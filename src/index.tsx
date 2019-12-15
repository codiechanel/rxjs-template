import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { duration } from './duration'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { useEffect, useRef } from 'react'

function MainSvg(props) {
  let circle1 = new CircleObj(100, 180, 50)
  circle1.fill = '#567'
  const inputEl = useRef(null)
  console.log(props.children)
  const eventListener = ({ clientX, clientY }) => {
    circle1.cx = clientX
    circle1.cy = clientY
  }
  useClickListener(inputEl, eventListener)

  return (
    <div id="thediv" style={{ padding: 0 }}>
      <svg width="800" height="400" fill="#688" ref={inputEl}>
        {/* {props.children} */}
        <Circle circleObj={circle1} />
      </svg>
      <button onClick={() => (circle1.fill = '#888')}>coo</button>
    </div>
  )
}

// you want this to be an object
// and a component
const Circle = observer(props => {
  let { cx, cy, r, fill } = props.circleObj
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill={fill}
      onClick={() => console.log('aa')}
    />
  )
})

class CircleObj {
  @observable cx
  @observable cy
  @observable r
  @observable fill
  constructor(cx, cy, r) {
    this.cx = cx
    this.cy = cy
    this.r = r
  }
}

function useClickListener(inputEl, eventListener) {
  // we should pass inputEl
  // not inputEl.current
  // useEffect will run after render...
  // by that time current will have a value
  useEffect(() => {
    console.log('useEffect')
    let element = inputEl.current
    // let element = document;
    let eventName = 'click'

    const isSupported = element && element.addEventListener
    if (!isSupported) return
    // const eventListener = ({ clientX, clientY }) => {
    // 	circle1.cx = clientX;
    // 	circle1.cy = clientY;
    // };
    element.addEventListener('click', eventListener)
    return () => {
      element.removeEventListener(eventName, eventListener)
    }
    // useEventListener("mousemove", handler, inputEl.current);
  })
}

function App() {
  duration(2000).subscribe({
    next: v => console.log(`observerA: ${v}`),
    complete: () => console.log('done')
  })

  let circle1 = new CircleObj(100, 180, 50)
  circle1.fill = '#567'

  return (
    // <Container>

    // padding affects mouse location on svg
    // <div id="thediv" style={{ padding: 0 }}>
    <MainSvg>
      {/* {circles.map((x, i) => {
            return <Circle key={i} circleObj={x} />;
          })} */}
      {/* cx={x.cx} cy={x.cy} r={x.r}  */}
      {/* <Circle cx={100} cy={180} r={5} />
        <Circle cx={200} cy={180} r={5} /> */}
    </MainSvg>

    // </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
  // <Hello compiler="TypeScript" framework="React" />,
  // document.getElementById("root")
)
