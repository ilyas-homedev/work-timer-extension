import { PropsWithChildren } from "react";
import classes from "./TimerCircle.module.css";

type TimerCircleType = {
  width: string;
  className?: string;
};

function TimerCircle({
  width,
  className,
  children,
}: PropsWithChildren<TimerCircleType>) {
  return (
    <div
      style={{ width: width, height: width }}
      className={classes.outer_circle}
    >
      <div
        style={{ width: width, height: width }}
        className={classes.middle_circle}
      >
        <div className={`${classes.inner_circle} ${className}`}>{children}</div>
      </div>
    </div>
  );
}

export default TimerCircle;
