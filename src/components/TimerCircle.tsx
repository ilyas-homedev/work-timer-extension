import { PropsWithChildren } from "react";
import classes from "./TimerCircle.module.css";
import Circle from "../icons/Circle";
import CircleAnimation from "./styled/CircleAnimation";

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

  return (
    <div
      style={{ width: width, height: width }}
      className={classes.outer_circle}
    >
      <CircleAnimation
        width={width}
        strokeWidth={strokeWidth}
        strokeDashoffset={strokeDashoffset}
      >
        <Circle
          width={width}
          strokeWidth={strokeWidth}
          strokeDashoffset={strokeDashoffset}
        />
      </CircleAnimation>
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
