import classes from "./AutoTimer.module.css";
import TimerCircle from "./TimerCircle";
import TimeInput from "./UI/TimeInput";

function AutoTimer() {
  return (
    <div className={classes.auto_timer_container}>
      <div className={classes.auto_timer}>
        <TimerCircle width={180} strokeWidth={10} />
      </div>
      <div className={classes.time_set}>
        <div className={classes.inputs_container}>
          <TimeInput id="minutes" range={24} />
          <span>:</span>
          <TimeInput id="minutes" range={60} />
        </div>
      </div>
    </div>
  );
}

export default AutoTimer;
