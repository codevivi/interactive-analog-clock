import { createContext, useContext } from "react";
import { SettingsCtx } from "./SettingsCtx";
import { useTime } from "../hooks/useTime.js";

export const TimeCtx = createContext();
export function TimeProvider({ children }) {
  const { isInteractive } = useContext(SettingsCtx);
  const [time, seconds, minutes, hours, moveOnMinute] = useTime(isInteractive);

  return (
    <TimeCtx.Provider
      value={{
        time: time,
        seconds: seconds,
        minutes: minutes,
        hours: hours,
        moveOnMinute: moveOnMinute,
      }}>
      {children}
    </TimeCtx.Provider>
  );
}
