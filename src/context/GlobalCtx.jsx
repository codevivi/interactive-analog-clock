import { createContext } from "react";
import { useTime } from "../hooks/useTime";

export const GlobalCtx = createContext();
export function GlobalProvider({ children }) {
  const [time, seconds, minutes, hours] = useTime();
  return (
    <GlobalCtx.Provider
      value={{
        nowTime: time,
        nowSeconds: seconds,
        nowMinutes: minutes,
        nowHours: hours,
      }}>
      {children}
    </GlobalCtx.Provider>
  );
}
