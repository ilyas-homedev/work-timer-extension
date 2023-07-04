import { SyntheticEvent, useState } from "react";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import TimeOptions from "./TimeOptions";
import { formatTime } from "../../helpers/formatTime";
import classes from "./TimeInput.module.css";

type TimerInputType = {
  id: string;
  range: number;
};

function TimeInput({ id, range }: TimerInputType) {
  let numbersArray: number[] = [];

  const [inputValue, setInputValue] = useState<string>("00");
  const [optionsIsVisible, setOptionsIsVisible] = useState(false);

  for (let i = 0; i <= range; i++) {
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

    setInputValue(formatTime(+target.textContent!));
  }

  function focusHandler() {
    setOptionsIsVisible(true);

    if (+inputValue) {
      setInputValue((prev) => {
        const prevNum = +prev;
        return prevNum.toString();
      });
    } else {
      setInputValue("");
    }
  }

  function blurHandler() {
    setInputValue(formatTime(+inputValue));
    setOptionsIsVisible(false);
  }

  function changeHandler(event: SyntheticEvent) {
    const target = event.target as HTMLInputElement;

    const onlyNumbers = target.value.replaceAll(/\D/g, "");

    setInputValue(onlyNumbers.slice(0, 2));
  }

  function increaseTimeValue() {
    setInputValue((prev) => {
      if (+prev < range) {
        return formatTime(+prev + 1);
      }
      return formatTime(range);
    });
  }

  function decreaseTimeValue() {
    setInputValue((prev) => {
      if (+prev > 0) {
        return formatTime(+prev - 1);
      }
      return formatTime(0);
    });
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
