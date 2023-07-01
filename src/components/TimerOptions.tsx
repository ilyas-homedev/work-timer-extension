import { SyntheticEvent, useState } from "react";
import classes from "./TimerOptions.module.css";
import AutoTimer from "./AutoTimer";

function TimerOptions() {
  const [isManual, setIsManual] = useState(false);

  function chooseOptionHandler(event: SyntheticEvent) {
    const target = event.target as HTMLLIElement;

    target.id === "manual" ? setIsManual(true) : setIsManual(false);
  }

  return (
    <div className={classes.options_container}>
      <div className={classes.options} onClick={chooseOptionHandler}>
        <span className={classes.delimiter}></span>
        <button id="auto" className={`${!isManual ? classes.active : ""}`}>
          Auto
        </button>
        <button id="manual" className={`${isManual ? classes.active : ""}`}>
          Manual
        </button>
      </div>
      <div
        className={`${classes.timers_slider} ${isManual ? classes.slide : ""}`}
      >
        <div className={classes.timer_container}>
          <AutoTimer />
        </div>
        <div className={classes.timer_container}>Manual Timer</div>
      </div>
    </div>
  );
}

export default TimerOptions;
