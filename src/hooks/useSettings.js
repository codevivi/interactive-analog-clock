import { useCallback, useState } from "react";
function useSettings() {
  const [isInteractive, setIsInteractive] = useState(false);
  const [isDigitalVisible, setIsDigitalVisible] = useState(true);
  const [gapForMinutesAroundFace, setGapForMinutesAroundFace] = useState(1); //1 or 5 or 10 only
  const [isMinutesAroundFace, setIsMinutesAroundFace] = useState(false);
  const [isHourFormat12, setIsHourFormat12] = useState(false);

  const makeInteractive = useCallback(() => {
    setIsInteractive(true);
  }, []);
  const makeNotInteractive = useCallback(() => {
    setIsInteractive(false);
  }, []);
  const showDigital = useCallback(() => {
    setIsDigitalVisible(true);
  }, []);
  const hideDigital = useCallback(() => {
    setIsDigitalVisible(false);
  }, []);
  const makeDigitalFormat12 = useCallback(() => {
    setIsHourFormat12(true);
  }, []);
  const makeDigitalFormat24 = useCallback(() => {
    setIsHourFormat12(false);
  }, []);
  const showMinutesAroundFace = useCallback(() => {
    setIsMinutesAroundFace(true);
  }, []);
  const hideMinutesAroundFace = useCallback(() => {
    setIsMinutesAroundFace(false);
  }, []);
  const chooseGapForMinutesAroundFace = useCallback((num = 1) => {
    return () => setGapForMinutesAroundFace(num);
  }, []);

  return [isInteractive, makeInteractive, makeNotInteractive, isDigitalVisible, showDigital, hideDigital, isHourFormat12, makeDigitalFormat12, makeDigitalFormat24, isMinutesAroundFace, showMinutesAroundFace, hideMinutesAroundFace, gapForMinutesAroundFace, chooseGapForMinutesAroundFace];
}
export default useSettings;
