import "./style.css";
import { useMemo, useContext } from "react";
import morning6 from "../../resources/img/clock_bg/morning6h.svg";
import morning8 from "../../resources/img/clock_bg/morning8h.svg";
import morning10 from "../../resources/img/clock_bg/morning10h.svg";
import morning11 from "../../resources/img/clock_bg/morning11h.svg";
import morning12 from "../../resources/img/clock_bg/morning12h.svg";
import day1 from "../../resources/img/clock_bg/day1h.svg";
import day2 from "../../resources/img/clock_bg/day2h.svg";
import day6 from "../../resources/img/clock_bg/day6h.svg";
import evening7 from "../../resources/img/clock_bg/evening7h.svg";
import evening8 from "../../resources/img/clock_bg/evening8h.svg";
import evening9 from "../../resources/img/clock_bg/evening9h.svg";
import night10 from "../../resources/img/clock_bg/night10h.svg";
import night11 from "../../resources/img/clock_bg/night11h.svg";
import night12 from "../../resources/img/clock_bg/night12h.svg";
import night2 from "../../resources/img/clock_bg/night2h.svg";
import night4 from "../../resources/img/clock_bg/night4h.svg";
import night5 from "../../resources/img/clock_bg/night5h.svg";
import { TimeCtx } from "../../context/TimeCtx";
import { chooseBg } from "./chooseBg.js";
import { chooseBgColor } from "./chooseBgColor.js";
const DynamicBg = () => {
  const { hours } = useContext(TimeCtx);
  return useMemo(() => {
    const bg = chooseBg(hours);
    const underBgColor = chooseBgColor(hours);
    return (
      <div className="dynamic-bg" style={{ backgroundColor: underBgColor }}>
        <img className={`dynamic-bg__img ${bg === "morning6" ? "visible" : ""}`} src={morning6} widht="840" height="840" alt="rytas" />
        <img className={`dynamic-bg__img ${bg === "morning8" ? "visible" : ""}`} src={morning8} widht="840" height="840" alt="rytas" />
        <img className={`dynamic-bg__img ${bg === "morning10" ? "visible" : ""}`} src={morning10} widht="840" height="840" alt="rytas" />
        <img className={`dynamic-bg__img ${bg === "morning11" ? "visible" : ""}`} src={morning11} widht="840" height="840" alt="rytas" />
        <img className={`dynamic-bg__img ${bg === "morning12" ? "visible" : ""}`} src={morning12} widht="840" height="840" alt="rytas" />
        <img className={`dynamic-bg__img ${bg === "day1" ? "visible" : ""}`} src={day1} widht="840" height="840" alt="diena" />
        <img className={`dynamic-bg__img ${bg === "day2" ? "visible" : ""}`} src={day2} widht="840" height="840" alt="diena" />
        <img className={`dynamic-bg__img ${bg === "day6" ? "visible" : ""}`} src={day6} widht="840" height="840" alt="diena" />
        <img className={`dynamic-bg__img ${bg === "evening7" ? "visible" : ""}`} src={evening7} widht="840" height="840" alt="vakaras" />
        <img className={`dynamic-bg__img ${bg === "evening8" ? "visible" : ""}`} src={evening8} widht="840" height="840" alt="vakaras" />
        <img className={`dynamic-bg__img ${bg === "evening9" ? "visible" : ""}`} src={evening9} widht="840" height="840" alt="vakaras" />
        <img className={`dynamic-bg__img ${bg === "night10" ? "visible" : ""}`} src={night10} widht="840" height="840" alt="naktis" />
        <img className={`dynamic-bg__img ${bg === "night11" ? "visible" : ""}`} src={night11} widht="840" height="840" alt="naktis" />
        <img className={`dynamic-bg__img ${bg === "night12" ? "visible" : ""}`} src={night12} widht="840" height="840" alt="naktis" />
        <img className={`dynamic-bg__img ${bg === "night2" ? "visible" : ""}`} src={night2} widht="840" height="840" alt="naktis" />
        <img className={`dynamic-bg__img ${bg === "night4" ? "visible" : ""}`} src={night4} widht="840" height="840" alt="naktis" />
        <img className={`dynamic-bg__img ${bg === "night5" ? "visible" : ""}`} src={night5} widht="840" height="840" alt="naktis" />
      </div>
    );
  }, [hours]);
};

export default DynamicBg;
