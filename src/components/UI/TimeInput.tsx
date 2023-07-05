import { SyntheticEvent, useContext, useState } from "react";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import TimeOptions from "./TimeOptions";
import { formatTime } from "../../helpers/formatTime";
import classes from "./TimeInput.module.css";
import { TimerContext } from "../../context/ContextProvider";

type TimerInputType = {
  id: string;
  range: number;
  groupName: string;
};

function TimeInput({ id, range, groupName }: TimerInputType) {
  let numbersArray: number[] = [];

  // const [inputValue, setInputValue] = useState<string>("00");
  const [optionsIsVisible, setOptionsIsVisible] = useState(false);

  const [timeValues, setTime] = useContext(TimerContext);

  const inputValue = timeValues[groupName][id];

  for (let i = 0; i <= range; i++) {
    numbersArray.push(i);
  }

  function setTimeToContext(value: string | (() => string)) {
    if (typeof value === "function") {
      setTime(value(), groupName, id);
      return;
    }
    setTime(value, groupName, id);
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

    setTimeToContext(formatTime(+target.textContent!));
  }

  function focusHandler() {
    setOptionsIsVisible(true);

    if (+inputValue) {
      // setTimeToContext((prev) => {
      //   const prevNum = +prev;
      //   return prevNum.toString();
      // });
      const stringInputValue = parseInt(inputValue).toString();
      setTimeToContext(stringInputValue);
    } else {
      setTimeToContext("");
    }
  }

  function blurHandler() {
    setTimeToContext(formatTime(+inputValue));
    setOptionsIsVisible(false);
  }

  function changeHandler(event: SyntheticEvent) {
    const target = event.target as HTMLInputElement;

    const onlyNumbers = target.value.replaceAll(/\D/g, "");

    setTimeToContext(onlyNumbers.slice(0, 2));
  }

  function increaseTimeValue() {
    // setInputValue((prev) => {
    //   if (+prev < range) {
    //     return formatTime(+prev + 1);
    //   }
    //   return formatTime(range);
    // });
    if (+inputValue < range) {
      setTimeToContext(formatTime(+inputValue + 1));
    } else {
      setTimeToContext(formatTime(range));
    }
  }

  function decreaseTimeValue() {
    // setInputValue((prev) => {
    //   if (+prev > 0) {
    //     return formatTime(+prev - 1);
    //   }
    //   return formatTime(0);
    // });
    if (+inputValue > 0) {
      setTimeToContext(formatTime(+inputValue - 1));
    } else {
      setTimeToContext(formatTime(0));
    }
  }

  return (
    <div className={classes.time_group}>
      {optionsIsVisible && (
        <TimeOptions options={numbersArray} onChooseTime={chooseTimeHandler} />
      )}
      <button
        id="increase"
        className={classes.value_changer_btn}
        style={{ transform: "rotate(180deg)" }}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        onClick={increaseTimeValue}
      >
        <ArrowDownIcon />
      </button>
      <input
        id={id}
        type="text"
        className={classes.time_input}
        value={inputValue}
        onFocus={focusHandler}
        onBlur={blurHandler}
        onChange={changeHandler}
        placeholder="00"
        autoComplete="off"
      />
      <button
        id="decrease"
        className={classes.value_changer_btn}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        onClick={decreaseTimeValue}
      >
        <ArrowDownIcon />
      </button>
    </div>
  );
}

export default TimeInput;
