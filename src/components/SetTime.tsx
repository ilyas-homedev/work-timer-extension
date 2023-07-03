import TimeInput from "./UI/TimeInput";
import classes from "./SetTime.module.css";

type SetTimeType = {
  label: string;
};

function SetTime({ label }: SetTimeType) {
  return (
    <div className={classes.set_time_group}>
      <p className={classes.label}>{label}</p>
      <div className={classes.inputs_container}>
        <TimeInput id="minutes" range={23} />
        <span>:</span>
        <TimeInput id="minutes" range={59} />
      </div>
    </div>
  );
}

export default SetTime;
