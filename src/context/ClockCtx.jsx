import { createContext, useContext } from "react";
import { useClock } from "../hooks/useClock";
import { SettingsCtx } from "./SettingsCtx";

export const ClockCtx = createContext();
export function ClockProvider({ children }) {
  const { isInteractive } = useContext(SettingsCtx);
  const [enableDrag, removeDrag, isDragEnabled] = useClock(isInteractive);

  return (
    <ClockCtx.Provider
      value={{
        isDragEnabled: isDragEnabled,
        enableDrag: enableDrag,
        removeDrag: removeDrag,
      }}>
      {children}
    </ClockCtx.Provider>
  );
}
