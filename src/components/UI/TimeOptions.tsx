import { SyntheticEvent, useRef } from "react";
import classes from "./TimeOptions.module.css";

type TimeOptionsType = {
  options: number[];
  onChooseTime: (e: SyntheticEvent) => void;
};

function TimeOptions({ options, onChooseTime }: TimeOptionsType) {
  const containerRef = useRef<HTMLDivElement>(null);

  function scrollHandler(event: SyntheticEvent) {
    if (containerRef.current) {
      const target = event.target as HTMLUListElement;

      const scrollTop = target.scrollTop;

      const scrollBottom =
        target.scrollHeight -
        containerRef.current.clientHeight -
        scrollTop +
        2 * target.offsetTop;

      if (scrollTop === 0) {
        target.classList.add(classes.bounce_top);
      } else if (scrollBottom === 0) {
        target.classList.add(classes.bounce_bottom);
      } else {
        target.classList.remove(classes.bounce_top);
        target.classList.remove(classes.bounce_bottom);
      }
    }
  }

  return (
    <div className={classes.options_container} ref={containerRef}>
      <ul onScroll={scrollHandler}>
        {options.map((option) => (
          <li
            key={option}
            className={classes.option_item}
            onMouseDown={onChooseTime}
          >
            {option}
          </li>
        ))}
      </ul>
      <div className={classes.overlay}></div>
    </div>
  );
}

export default TimeOptions;
