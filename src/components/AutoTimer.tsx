import TimerCircle from "./TimerCircle";
import SetTime from "./SetTime";
import classes from "./AutoTimer.module.css";

function AutoTimer() {
  return (
    <div className={classes.auto_timer_container}>
      <div className={classes.auto_timer}>
        <TimerCircle width={170} strokeWidth={12} />
      </div>
      <div className={classes.time_set}>
        <SetTime label="work" />
        <SetTime label="rest" />
      </div>
    </div>
  );
}

export default AutoTimer;
