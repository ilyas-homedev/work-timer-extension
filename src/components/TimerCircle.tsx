import { PropsWithChildren, useContext, useState } from "react";
import classes from "./TimerCircle.module.css";
import Circle from "../icons/Circle";
import { TimerContext } from "../context/ContextProvider";
import { convertToSeconds } from "../helpers/convertToSeconds";

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

  const [timerStarted, setTimerStarted] = useState<boolean>(false);
  const [timeoutSeconds, setTimeoutSeconds] = useState(3);

  const [timeValues] = useContext(TimerContext);

  const workTimeSeconds =
    convertToSeconds(timeValues.work.hours, "hours") +
    convertToSeconds(timeValues.work.minutes, "minutes");

  const restTimeSeconds =
    convertToSeconds(timeValues.rest.hours, "hours") +
    convertToSeconds(timeValues.rest.minutes, "minutes");

  function startTimer() {
    if (workTimeSeconds === 0) return;
    setTimerStarted(true);
    // setTimeoutSeconds(3);

    let timer: any;

    if (timer) {
      clearTimeout(timer);

      timer = window.setTimeout(() => {
        setTimerStarted(false);
        setTimeoutSeconds(0);

        clearTimeout(timer);
      }, workTimeSeconds * 1000);
    }
  }

  return (
    <div
      style={{ width: width, height: width }}
      className={classes.outer_circle}
    >
      <Circle
        width={width}
        strokeWidth={strokeWidth}
        strokeDashoffset={strokeDashoffset}
        className={timerStarted ? classes.timer_start : ""}
        timeout={workTimeSeconds}
      />

      <div
        style={{
          width: innerCircleWidth,
          height: innerCircleWidth,
          top: strokeWidth,
          left: strokeWidth,
        }}
        className={`${classes.inner_circle} ${className}`}
      >
        <button onClick={startTimer}>START</button>
      </div>
    </div>
  );
}

export default TimerCircle;
