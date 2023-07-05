import TimeInput from "./UI/TimeInput";
import classes from "./SetTime.module.css";

type SetTimeType = {
  groupName: string;
  label: string;
};

function SetTime({ groupName, label }: SetTimeType) {
  return (
    <div className={classes.set_time_group}>
      <p className={classes.label}>{label}</p>
      <div className={classes.inputs_container}>
        <TimeInput groupName={groupName} id="hours" range={23} />
        <span>:</span>
        <TimeInput groupName={groupName} id="minutes" range={59} />
      </div>
    </div>
  );
}

export default SetTime;
