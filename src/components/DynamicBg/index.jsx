import "./style.css";
import { useMemo, useContext } from "react";
import h6 from "../../resources/img/clock_bg/h6.svg";
import h7 from "../../resources/img/clock_bg/h7.svg";
import h9 from "../../resources/img/clock_bg/h9.svg";
import h11 from "../../resources/img/clock_bg/h11.svg";
import h12 from "../../resources/img/clock_bg/h12.svg";
import h13 from "../../resources/img/clock_bg/h13.svg";
import h15 from "../../resources/img/clock_bg/h15.svg";
import h17 from "../../resources/img/clock_bg/h17.svg";
import h19 from "../../resources/img/clock_bg/h21.svg";
import h20 from "../../resources/img/clock_bg/h20.svg";
import h21 from "../../resources/img/clock_bg/h21.svg";
import h22 from "../../resources/img/clock_bg/h22.svg";
import h23 from "../../resources/img/clock_bg/h23.svg";
import h0 from "../../resources/img/clock_bg/h0.svg";
import h1 from "../../resources/img/clock_bg/h1.svg";
import h4 from "../../resources/img/clock_bg/h4.svg";
import h5 from "../../resources/img/clock_bg/h5.svg";
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
        <img className={`dynamic-bg__img ${bg === "h6" ? "visible" : ""}`} src={h6} width="612" height="612" alt="rytas" />
        <img className={`dynamic-bg__img ${bg === "h7" ? "visible" : ""}`} src={h7} width="612" height="612" alt="rytas" />
        <img className={`dynamic-bg__img ${bg === "h9" ? "visible" : ""}`} src={h9} width="612" height="612" alt="rytas" />
        <img className={`dynamic-bg__img ${bg === "h11" ? "visible" : ""}`} src={h11} width="612" height="612" alt="rytas" />
        <img className={`dynamic-bg__img ${bg === "h12" ? "visible" : ""}`} src={h12} width="612" height="612" alt="rytas" />
        <img className={`dynamic-bg__img ${bg === "h13" ? "visible" : ""}`} src={h13} width="612" height="612" alt="diena" />
        <img className={`dynamic-bg__img ${bg === "h15" ? "visible" : ""}`} src={h15} width="612" height="612" alt="diena" />
        <img className={`dynamic-bg__img ${bg === "h17" ? "visible" : ""}`} src={h17} width="612" height="612" alt="diena" />
        <img className={`dynamic-bg__img ${bg === "h19" ? "visible" : ""}`} src={h19} width="612" height="612" alt="vakaras" />
        <img className={`dynamic-bg__img ${bg === "h20" ? "visible" : ""}`} src={h20} width="612" height="612" alt="vakaras" />
        <img className={`dynamic-bg__img ${bg === "h21" ? "visible" : ""}`} src={h21} width="612" height="612" alt="vakaras" />
        <img className={`dynamic-bg__img ${bg === "h22" ? "visible" : ""}`} src={h22} width="612" height="612" alt="naktis" />
        <img className={`dynamic-bg__img ${bg === "h23" ? "visible" : ""}`} src={h23} width="612" height="612" alt="naktis" />
        <img className={`dynamic-bg__img ${bg === "h0" ? "visible" : ""}`} src={h0} width="612" height="612" alt="naktis" />
        <img className={`dynamic-bg__img ${bg === "h1" ? "visible" : ""}`} src={h1} width="612" height="612" alt="naktis" />
        <img className={`dynamic-bg__img ${bg === "h4" ? "visible" : ""}`} src={h4} width="612" height="612" alt="naktis" />
        <img className={`dynamic-bg__img ${bg === "h5" ? "visible" : ""}`} src={h5} width="612" height="612" alt="naktis" />
      </div>
    );
  }, [hours]);
};

export default DynamicBg;
