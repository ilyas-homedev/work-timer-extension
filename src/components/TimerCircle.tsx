import { PropsWithChildren } from "react";
import classes from "./TimerCircle.module.css";
import Circle from "../icons/Circle";

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
  return (
    <div
      style={{ width: width, height: width }}
      className={classes.outer_circle}
    >
      <Circle width={width} strokeWidth={strokeWidth} />
      <div
        style={{
          width: innerCircleWidth,
          height: innerCircleWidth,
        }}
        className={`${classes.inner_circle} ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

export default TimerCircle;
