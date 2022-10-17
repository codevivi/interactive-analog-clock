import "./style.css";
import { useState, useEffect, useCallback } from "react";
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
const DynamicBg = ({ h }) => {
  const chooseBackground = useCallback(() => {
    let clockBg;
    let hour = Number(h);
    if (hour === 0) {
      clockBg = "night12";
    } else if (hour >= 1 && hour < 4) {
      clockBg = "night2";
    } else if (hour === 4) {
      clockBg = "night4";
    } else if (hour === 5) {
      clockBg = "night5";
    } else if (hour >= 5 && hour < 7) {
      clockBg = "morning6";
    } else if (hour >= 7 && hour <= 8) {
      clockBg = "morning8";
    } else if (hour > 8 && hour <= 10) {
      clockBg = "morning10";
    } else if (hour > 10 && hour <= 11) {
      clockBg = "morning11";
    } else if (hour > 11 && hour < 13) {
      clockBg = "morning12";
    } else if (hour >= 13 && hour <= 14) {
      clockBg = "day1";
    } else if (hour > 14 && hour <= 16) {
      clockBg = "day2";
    } else if (hour > 16 && hour <= 18) {
      clockBg = "day6";
    } else if (hour > 18 && hour <= 19) {
      clockBg = "evening7";
    } else if (hour > 19 && hour <= 20) {
      clockBg = "evening8";
    } else if (hour > 20 && hour < 22) {
      clockBg = "evening9";
    } else if (hour >= 22 && hour < 23) {
      clockBg = "night10";
    } else if (hour === 23) {
      clockBg = "night11";
    }
    return clockBg;
  }, [h]);

  const [bg, setBg] = useState(chooseBackground);
  useEffect(() => {
    setBg(chooseBackground);
  }, [chooseBackground, h]);
  let underBgColor = "";
  if (h > 19 || h > 7) {
    underBgColor = `black`;
  } else {
    underBgColor = `white`;
  }
  return (
    <div className="dynamic-bg" style={{ backgroundColor: underBgColor }}>
      <img className={`dynamic-bg__img ${bg === "morning6" ? "visible" : ""}`} src={morning6} widht="100" alt="" />
      <img className={`dynamic-bg__img ${bg === "morning8" ? "visible" : ""}`} src={morning8} widht="100" alt="" />
      <img className={`dynamic-bg__img ${bg === "morning10" ? "visible" : ""}`} src={morning10} widht="100" alt="" />
      <img className={`dynamic-bg__img ${bg === "morning11" ? "visible" : ""}`} src={morning11} widht="100" alt="" />
      <img className={`dynamic-bg__img ${bg === "morning12" ? "visible" : ""}`} src={morning12} widht="100" alt="" />
      <img className={`dynamic-bg__img ${bg === "day1" ? "visible" : ""}`} src={day1} widht="100" alt="" />
      <img className={`dynamic-bg__img ${bg === "day2" ? "visible" : ""}`} src={day2} widht="100" alt="" />
      <img className={`dynamic-bg__img ${bg === "day6" ? "visible" : ""}`} src={day6} widht="100" alt="" />
      <img className={`dynamic-bg__img ${bg === "evening7" ? "visible" : ""}`} src={evening7} widht="100" alt="" />
      <img className={`dynamic-bg__img ${bg === "evening8" ? "visible" : ""}`} src={evening8} widht="100" alt="" />
      <img className={`dynamic-bg__img ${bg === "evening9" ? "visible" : ""}`} src={evening9} widht="100" alt="" />
      <img className={`dynamic-bg__img ${bg === "night10" ? "visible" : ""}`} src={night10} widht="100" alt="" />
      <img className={`dynamic-bg__img ${bg === "night11" ? "visible" : ""}`} src={night11} widht="100" alt="" />
      <img className={`dynamic-bg__img ${bg === "night12" ? "visible" : ""}`} src={night12} widht="100" alt="" />
      <img className={`dynamic-bg__img ${bg === "night2" ? "visible" : ""}`} src={night2} widht="100" alt="" />
      <img className={`dynamic-bg__img ${bg === "night4" ? "visible" : ""}`} src={night4} widht="100" alt="" />
      <img className={`dynamic-bg__img ${bg === "night5" ? "visible" : ""}`} src={night5} widht="100" alt="" />
    </div>
  );
};

export default DynamicBg;
