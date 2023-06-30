import classes from "./AutoTimer.module.css";
import TimerCircle from "./TimerCircle";

function AutoTimer() {
  return (
    <div className={classes.auto_timer_container}>
      <div className={classes.auto_timer}>
        <TimerCircle width="150px" />
      </div>
      <div className={classes.actions}></div>
      <div className={classes.time_set}></div>
    </div>
  );
}

export default AutoTimer;
