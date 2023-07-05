import { PropsWithChildren, useState } from "react";
import classes from "./TimerCircle.module.css";
import Circle from "../icons/Circle";
// import CircleAnimation from "./styled/CircleAnimation";

type TimerCircleType = {
  width: number;
  strokeWidth: number;
  className?: string;
};

function TimerCircle({
  width,
  strokeWidth,
  className,
  children,
}: PropsWithChildren<TimerCircleType>) {
  const innerCircleWidth = `${width - 2 * strokeWidth}px`;
  const strokeDashoffset = Math.PI * (width - strokeWidth);
  // const circumferenceLength = useRef()
  const [timerStarted, setTimerStarted] = useState(false);

  function startTimer() {
    setTimerStarted(true);
    // const timer = setTimeout(() => {
    //   setTimerStarted(false);
    // }, 5000);
  }

  return (
    <div
      style={{ width: width, height: width }}
      className={classes.outer_circle}
    >
      {/* <CircleAnimation
        width={width}
        strokeWidth={strokeWidth}
        strokeDashoffset={strokeDashoffset}
        timeout={10}
      > */}
      <Circle
        width={width}
        strokeWidth={strokeWidth}
        strokeDashoffset={strokeDashoffset}
        className={timerStarted ? classes.timer_start : ""}
        timeout={1}
      />
      {/* </CircleAnimation> */}
      <div
        style={{
          width: innerCircleWidth,
          height: innerCircleWidth,
          top: strokeWidth,
          left: strokeWidth,
        }}
        className={`${classes.inner_circle} ${className}`}
      >
        <button onClick={startTimer}>start</button>
      </div>
    </div>
  );
}

export default TimerCircle;
