import { SyntheticEvent } from "react";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import classes from "./HistoryButton.module.css";

type HistoryButtonType = {
  onClick: (e: SyntheticEvent) => void;
  historyIsOpened: boolean;
};

function HistoryButton({ onClick, historyIsOpened }: HistoryButtonType) {
  return (
    <button
      className={`${classes.historyBtn} ${historyIsOpened ? classes.back : ""}`}
      onClick={onClick}
    >
      <span data-testid="button-text">
        {historyIsOpened ? "back" : "history"}
      </span>
      <div className={classes.iconContainer}>
        <ArrowDownIcon />
      </div>
    </button>
  );
}

export default HistoryButton;
