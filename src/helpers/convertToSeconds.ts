export function convertToSeconds(value: string, unit: string): number {
  switch (unit) {
    case "hours": {
      return +value * 60 * 60;
    }
    case "minutes": {
      return +value * 60;
    }
    default: {
      return 0;
    }
  }
}
