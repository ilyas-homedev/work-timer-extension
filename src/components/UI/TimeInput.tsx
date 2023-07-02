import { SyntheticEvent, useState } from "react";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import TimeOptions from "./TimeOptions";
import classes from "./TimeInput.module.css";

type TimerInputType = {
  id: string;
  range: number;
};

function TimeInput({ id, range }: TimerInputType) {
  let numbersArray: number[] = [];

  const [optionsIsVisible, setOptionsIsVisible] = useState(false);

  for (let i = 0; i < range; i++) {
    numbersArray.push(i);
  }

  function mouseDownHandler(event: SyntheticEvent) {
    const target = event.target as HTMLButtonElement;

    target.classList.add(classes.mousedown);
  }

  function mouseUpHandler(event: SyntheticEvent) {
    const target = event.target as HTMLButtonElement;

    target.classList.remove(classes.mousedown);
  }

  function chooseTimeHandler(event: SyntheticEvent) {
    const target = event.target as HTMLLIElement;

    console.log(target.textContent);
  }

  return (
    <div className={classes.time_group}>
      {optionsIsVisible && (
        <TimeOptions options={numbersArray} onChooseTime={chooseTimeHandler} />
      )}
      <button
        id="increase"
        className={classes.value_changer_btn}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        style={{ transform: "rotate(180deg)" }}
      >
        <ArrowDownIcon />
      </button>
      <input
        id={id}
        type="text"
        className={classes.time_input}
        onFocus={() => setOptionsIsVisible(true)}
        onBlur={() => setOptionsIsVisible(false)}
      />
      <button
        id="decrease"
        className={classes.value_changer_btn}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
      >
        <ArrowDownIcon />
      </button>
    </div>
  );
}

export default TimeInput;
