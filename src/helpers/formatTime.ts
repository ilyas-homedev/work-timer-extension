export function formatTime(value: number): string {
  const valueInt = +value;

  if (valueInt === 0) {
    return "00";
  }

  if (valueInt < 10) {
    return `0${value}`;
  }

  return value.toString();
}
