import { PropsWithChildren, createContext, useCallback, useState } from "react";

interface ITimeValues {
  [work: string]: { [hours: string]: string; minutes: string };
  rest: { hours: string; minutes: string };
}

export const TimerContext = createContext<
  [ITimeValues, (value: string, groupName: string, unitOfTime: string) => void]
>([
  {
    work: { hours: "00", minutes: "00" },
    rest: { hours: "00", minutes: "00" },
  },
  () => {},
]);

function ContextProvider({ children }: PropsWithChildren) {
  const [timeValues, setTimeValues] = useState<ITimeValues>({
    work: { hours: "00", minutes: "00" },
    rest: { hours: "00", minutes: "00" },
  });

  const setTime = useCallback(
    (value: string, groupName: string, unitOfTime: string) => {
      setTimeValues((prev) => {
        return {
          ...prev,
          [groupName]: {
            ...prev[groupName as keyof typeof timeValues],
            [unitOfTime]: value,
          },
        };
      });
    },
    []
  );

  return (
    <TimerContext.Provider value={[timeValues, setTime]}>
      {children}
    </TimerContext.Provider>
  );
}

export default ContextProvider;
