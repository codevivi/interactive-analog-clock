import { createContext } from "react";
import useSettings from "../hooks/useSettings";

export const SettingsCtx = createContext();
export function SettingsProvider({ children }) {
  const [isInteractive, makeInteractive, makeNotInteractive, isDigitalVisible, showDigital, hideDigital, isHourFormat12, makeDigitalFormat12, makeDigitalFormat24, isMinutesAroundFace, showMinutesAroundFace, hideMinutesAroundFace, gapForMinutesAroundFace, chooseGapForMinutesAroundFace] =
    useSettings();

  return (
    <SettingsCtx.Provider
      value={{
        isInteractive: isInteractive,
        makeInteractive: makeInteractive,
        makeNotInteractive: makeNotInteractive,
        isDigitalVisible: isDigitalVisible,
        showDigital: showDigital,
        hideDigital: hideDigital,
        isHourFormat12: isHourFormat12,
        makeDigitalFormat12: makeDigitalFormat12,
        makeDigitalFormat24: makeDigitalFormat24,
        isMinutesAroundFace: isMinutesAroundFace,
        showMinutesAroundFace: showMinutesAroundFace,
        hideMinutesAroundFace: hideMinutesAroundFace,
        gapForMinutesAroundFace: gapForMinutesAroundFace,
        chooseGapForMinutesAroundFace: chooseGapForMinutesAroundFace,
      }}>
      {children}
    </SettingsCtx.Provider>
  );
}
